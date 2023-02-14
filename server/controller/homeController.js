const { todoData } = require("../repository/todoData")

module.exports = {
    listAllTodos: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        res.status(200).json(todoData)
      },
    
      addTodo: (req, res) => {
        todoData.push(req.body)
        return res.send(todoData)
      },

      updateAllTodos: (req, res) => {
        const bodyData = req.body
        todoData.length = 0
        todoData.push(...bodyData)
        return res.send(todoData)
      },
    
      removeTodo: (req, res) => {
        const { id } = req.params;
        let numberId = Number(id)

        const removedIdx = todoData.findIndex(todo => todo.id == numberId)
        todoData.splice(removedIdx, 1)
          
        res.send(todoData)
      }
};
