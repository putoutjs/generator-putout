import Generator from 'yeoman-generator';
import {basename} from 'path';
import {cwd} from 'process';
import {isRequired} from '../lib/validators.js';

export default class extends Generator {
    async prompting() {
        const prompts = [{
            type: 'input',
            name: 'userName',
            message: 'What is your name?',
        }, {
            type: 'input',
            name: 'desc',
            message: '🐊Putout plugin adds ability to ...',
            validate: isRequired,
        }, {
            type: 'input',
            name: 'reportMessage',
            message: `module.exports.report = () => "..."`,
        }];
        
        this.answers = await this.prompt(prompts);
    }
    
    writing() {
        const pluginId = basename(cwd());
        
        this.answers.pluginId = pluginId.replace('putout-plugin-', '');
        this.fs.copyTpl(this.templatePath('_.eslintrc.json'), this.destinationPath('.eslintrc.json'), this.answers);
        this.fs.copyTpl(this.templatePath('_.putout.json'), this.destinationPath('.putout.json'), this.answers);
        this.fs.copyTpl(this.templatePath('_.madrun.mjs'), this.destinationPath('.madrun.mjs'), this.answers);
        this.fs.copyTpl(this.templatePath('_plugin.js'), this.destinationPath(`lib/${pluginId}.js`), this.answers);
        this.fs.copyTpl(this.templatePath('_test.js'), this.destinationPath(`test/${pluginId}.js`), this.answers);
        this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.answers);
        this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'), this.answers);
        this.fs.copyTpl(this.templatePath('_LICENSE'), this.destinationPath('LICENSE'), this.answers);
    }
}
