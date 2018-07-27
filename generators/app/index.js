const Generator = require('yeoman-generator');
const dir = require('node-dir');
const path = require('path');
const chalk = require('chalk');

const prompts = require('./prompts');

class NgcGenerator extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.answers = null;
        this.prompts = prompts;
    }

    prompting() {
        return this.prompt(this.prompts)
            .then((answers) => {
                this.answers = answers;
            });
    }

    writing() {
        const template_file_regexp = new RegExp(/(?:[\/\\])(_[^\/\\]+)$/);
        return new Promise((resolve, reject) => {
            dir.files(path.join(__dirname,'templates'), (err, filePathArr) => {
                filePathArr.forEach((filePath) => {
                    const groups = template_file_regexp.exec(filePath);
                    const relativePath = filePath.slice(0,path.join(__dirname,'templates').length);
                    if (groups) {
                        const newFilePath = filePath.slice(relativePath.length,filePath.length-groups[0].length);
                        const newFileName = groups[1].slice(1);
                        const finalPath = path.join(this.destinationRoot(),newFilePath,newFileName);
                        this.fs.copyTpl(
                            this.templatePath(filePath),
                            this.destinationPath(finalPath),
                            { options: this.answers }
                        );
                    } else {
                        const newFilePath = filePath.slice(relativePath.length,filePath.length);
                        const finalPath = path.join(this.destinationRoot(),newFilePath);
                        this.fs.copy(
                            this.templatePath(filePath),
                            this.destinationPath(finalPath)
                        );
                    }
                });
                resolve();
            });  
        });
    }

    end() {
        this.log(chalk.yellow(`Run ${chalk.white(chalk.inverse('npm install'))} to get project dependencies.`));
        this.log(chalk.yellow(`Run ${chalk.white(chalk.inverse('ng build'))} to start running your Cordova commands.`));
    }
}

module.exports = NgcGenerator;