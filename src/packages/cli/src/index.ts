/* eslint-disable @typescript-eslint/no-unused-vars */
import { program } from 'commander';
import chalk from 'chalk';
// @ts-ignore
import figlet from 'figlet';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import ora from 'ora';
import { execSync } from 'child_process';

// Utility function to check and install packages if missing
export default async function checkAndInstallPackage(
  packageName: string,
  rootPath: string,
  spinnerText: string,
) {
  let isInstalled = false;
  try {
    require.resolve(path.join(rootPath, 'node_modules', packageName));
    isInstalled = true;
  } catch {
    isInstalled = false;
  }

  if (!isInstalled) {
    const { install } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'install',
        message: `${packageName} is required. Would you like to install it now?`,
        default: true,
      },
    ]);

    if (install) {
      const spinner = ora(`Installing ${packageName}...`).start();
      try {
        execSync(`npm install ${packageName}`, {
          stdio: 'inherit',
          cwd: rootPath,
        });
        spinner.succeed(`Successfully installed ${packageName}.`);
      } catch (error: any) {
        spinner.fail(`Failed to install ${packageName}: ${error.message}`);
        process.exit(1);
      }
    } else {
      console.log(
        chalk.red(
          `${packageName} is required. Please install it and try again.`,
        ),
      );
      process.exit(1);
    }
  }
}

// Main CLI output
console.log(
  chalk.yellow(figlet.textSync('AgentGenesis', { horizontalLayout: 'full' })),
);

program.version('1.0.0').description('My Node CLI');

program
  .command('add <component>')
  .description('Add a specified component inside the utils/agentgenesis folder')
  .action(async (component: string) => {
    const { rootPath } = await inquirer.prompt([
      {
        type: 'input',
        name: 'rootPath',
        message: 'What is the root path of your project?',
        default: process.cwd(),
        validate: (input) =>
          fs.existsSync(input) ||
          'The path you entered does not exist. Please enter a valid path.',
      },
    ]);

    const componentDependencies: { [key: string]: string } = {
      calculatortool: 'expr-eval',
      weaviateDb: 'weaviate-client',
      chatOpenAI: 'openai',
      chatAnthropic: '@anthropic-ai/sdk',
      chatGemini: '@google/generative-ai',
      openAIEmbeddings: 'openai',
      geminiEmbeddings: '@google/generative-ai',
      reranker: 'cohere-ai',
      unstructuredLoader: 'unstructured-client',
    };

    if (component in componentDependencies) {
      await checkAndInstallPackage(
        componentDependencies[component],
        rootPath,
        `Installing ${componentDependencies[component]}...`,
      );
    }

    const utilsPath = path.join(rootPath, 'utils', 'agentgenesis');
    const componentFilePath = path.join(utilsPath, `${component}.ts`);
    const templateFilePath = path.join(
      __dirname,
      'components',
      `${component}.ts`,
    );

    const spinner = ora(`Adding ${component} to your project...`).start();

    try {
      if (!fs.existsSync(templateFilePath)) {
        spinner.fail(`Template for '${component}' not found.`);
        return;
      }

      if (!fs.existsSync(utilsPath))
        fs.mkdirSync(utilsPath, { recursive: true });

      if (!fs.existsSync(componentFilePath)) {
        const templateContent = fs.readFileSync(templateFilePath, 'utf-8');
        fs.writeFileSync(componentFilePath, templateContent);
        spinner.succeed(`Created '${component}.ts' at ${componentFilePath}.`);
      } else {
        spinner.warn(
          `'${component}.ts' already exists at ${componentFilePath}.`,
        );
      }
    } catch (error: any) {
      spinner.fail(`Failed to add ${component}: ${error.message}`);
    }
  });

program.parse(process.argv);
