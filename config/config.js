'use restrict'

function getSettings() {
    let env = process.env.NODE_ENV
    switch (env) {
        
        case 'develop':
            console.log("Develop")
            return require("./config.dev");
            
        default:
            return { error: "Error load settings" };
    }
};

module.exports = getSettings();