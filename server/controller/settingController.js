const settingData = require("../repository/settingData")

module.exports = {
    listSetting: (req, res) => {
        return res.send(settingData)
      },
    
    updateSetting: (req, res) => {
    const {name, language, theme} = req.body 
    settingData['name'] = name 
    settingData['language'] = language 
    settingData['theme'] = theme 

    return res.send(settingData)
    }
};
