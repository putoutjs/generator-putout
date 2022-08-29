import Generator from "yeoman-generator";
import { mkdirSync } from "node:fs";
import { isPluginId, isRequired } from "../lib/validators.js";

export default class extends Generator {
    async prompting() {
        const prompts = [{
            type: "input",
            name: "userName",
            message: "What is your name?"
        }, {
            type: "input",
            name: "pluginId",
            message: "What is the plugin ID?",
            validate: isPluginId
        }, {
            type: "input",
            name: "desc",
            message: "🐊Putout plugin adds ability to ...",
            validate: isRequired
        }, {
            type: "input",
            name: "reportMessage",
            message: `module.exports.report = () => "..."`,
        }];

        this.answers = await this.prompt(prompts);
        this.answers.pluginId = this.answers.pluginId.replace("eslint-plugin-", "");
    }

    writing() {
        this.fs.copyTpl(this.templatePath("_.eslintrc.json"), this.destinationPath(".eslintrc.json"), this.answers);
        this.fs.copyTpl(this.templatePath("_.putout.json"), this.destinationPath(".putout.json"), this.answers);
        this.fs.copyTpl(this.templatePath("_.madrun.mjs"), this.destinationPath(".madrun.mjs"), this.answers);
        this.fs.copyTpl(this.templatePath("_plugin.js"), this.destinationPath("lib/index.js"), this.answers);
        this.fs.copyTpl(this.templatePath("_package.json"), this.destinationPath("package.json"), this.answers);
        this.fs.copyTpl(this.templatePath("_README.md"), this.destinationPath("README.md"), this.answers);
    }
}
