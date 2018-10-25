/*
 * Each action passes a payload to a mutation, which in turn, commits the data to store
 * The context is the instance of the Store class
 * The payload is passed in by whatever dispatches the action
 */

export default {
  addList(context, payload) {
    context.commit('addList', payload);
  },

  deleteList(context, payload) {
    context.commit('deleteList', payload);
  },

  addTask(context, payload) {
    context.commit('addTask', payload);
  },

  deleteTask(context, payload) {
    context.commit('deleteTask', payload);
  }
};