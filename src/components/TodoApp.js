import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Input from './common/Input';
import Button from './common/Button';
import data from '../todos.json';
import ListItem from './ListItem';

export default class TodoApp extends Component {
  state = {
    tasks: data,
    newTaskName: '',
    selectedIndex: 0
  };

  onAddTask() {
    const newTasks = this.state.tasks;
    newTasks.push({
      id: newTasks.length + 1,
      text: this.state.newTaskName,
      completed: false
    });

    this.setState({ tasks: newTasks });
    this.onPressFilter(0);
  }

  onPressFilter(index) {
    this.setState({
      selectedIndex: index
    });

    switch (index) {
      case 0:
        this.createDataSource(this.state.tasks);
        break;
      case 1:
        newData = this.state.tasks.slice().filter(d => {
          return d.completed === false;
        });
        this.createDataSource(newData);
        break;
      case 2:
        newData = this.state.tasks.filter(d => {
          return d.completed === true;
        });
        this.createDataSource(newData);
        break;
    }
  }

  createDataSource(data) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(data);
  }

  renderRow(task) {
    return (
      <ListItem
        task={task}
        onPress={() => {
          this.toggleStatus(task.id);
        }}
      />
    );
  }

  toggleStatus(index) {
    const newData = this.state.tasks.slice();
    
    newData[index - 1] = {
      ...this.state.tasks[index - 1],
      completed: !this.state.tasks[index - 1].completed
    };
    this.setState({
      tasks: newData
    });
    this.createDataSource(newData);
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.state.tasks);
  }

  render() {
    const { selectedIndex } = this.state;
    const filters = ['All', 'Active', 'Completed'];
    return (
      <View style={styles.container}>
        <View style={[styles.addSection, styles.seperator]}>
          <Input
            onChangeText={text => this.setState({ newTaskName: text })}
            value={this.state.newTaskName}
            style={styles.input}
            placeholder="Add things here..."
          />
          <Button style={styles.button} onPress={this.onAddTask.bind(this)}>
            Add
          </Button>
        </View>
        <View style={styles.listSection}>
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
        <ButtonGroup
          onPress={this.onPressFilter.bind(this)}
          selectedIndex={selectedIndex}
          buttons={filters}
          containerStyle={styles.filterSection}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  seperator: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1
  },
  button: {
    marginLeft: 6,
    flex: 0.2
  },
  input: {
    flex: 0.8
  },
  container: {
    paddingTop: 16,
    flex: 1
  },
  addSection: {
    padding: 20,
    flexDirection: 'row'
  },
  filterSection: {
    flexDirection: 'row',
    flex: 1
  },
  listSection: {
    flex: 8
  }
});
