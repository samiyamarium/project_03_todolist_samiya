#! /usr/bin/env node
const chalk=require('chalk');
const inquirer=require('inquirer');
inquirer.prompt([{
    name:'todo_list_1',
    type:'input',
    message:'What do you want to do? Entry#1: ',
},
{
    name:'todo_list_2',
    type:'input',
    message:'What do you want to do? Entry#2: ',
},
{
    name:'todo_list_3',
    type:'input',
    message:'What do you want to do? Entry#3: ',
},
{
    name:'todo_list_4',
    type:'input',
    message:'What do you want to do? Entry#4: ',
},
{
    name:'todo_list_5',
    type:'input',
    message:'What do you want to do? Entry#5: ',
},
{
    name:'todo_list_6',
    type:'input',
    message:'What do you want to do? Entry#6: ',
},
{
    name:'todo_list_7',
    type:'input',
    message:'What do you want to do? Entry#7: ',
},
{
    name:'todo_list_8',
    type:'input',
    message:'What do you want to do? Entry#8: ',
},
{
    name:'todo_list_9',
    type:'input',
    message:'What do you want to do? Entry#9: ',
},
{
    name:'todo_list_10',
    type:'input',
    message:'What do you want to do? Entry#10: ',
}




])
.then(answers=>{
    console.info(chalk.white('Entry#1:  => ', answers.todo_list_1))
     console.info(chalk.green('Entry#2:  => ', answers.todo_list_2))
    console.info(chalk.yellow('Entry#3:  => ', answers.todo_list_3))
    console.info(chalk.red('Entry#4:   => ', answers.todo_list_4))
    console.info(chalk.blue('Entry#5:  => ', answers.todo_list_5))
     console.info(chalk.magenta('Entry#6:  => ', answers.todo_list_6))
     console.info(chalk.yellow.dim('Entry#7:  => ', answers.todo_list_7))
     console.info(chalk.white('Entry#8:  => ', answers.todo_list_8))
     console.info(chalk.green('Entry#9:  => ', answers.todo_list_9))
    console.info(chalk.yellow('Entry#10:  => ', answers.todo_list_10))
}
    )
