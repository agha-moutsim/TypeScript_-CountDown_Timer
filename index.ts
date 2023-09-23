import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bgYellowBright('Welcome To My CountDown Timer'));

async function startCountDown() {
    const User1 = await inquirer.prompt([
        {
            type: "input",
            name: "Duration",
            message: "Enter Number To Start CountDown Timer",
            validate: (input) => {
                const value = parseInt(input);
                if (value <= 0 || isNaN(value)) {
                    return "Please Enter A Valid CountDown Number";
                }
                return true;
            },
        },
    ]).then((output) => {
        const Duration = parseInt(output.Duration);
        let count = Duration;
        
        const timeInterval = setInterval(() => {
            console.log(count);
            count--;

            if (count < 0) {
                clearInterval(timeInterval);
                console.log("Your CountDown Timer Has Finished!");
            }
        }, 1000);
    });
}

startCountDown();
