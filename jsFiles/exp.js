

const exp = (function() {


    var p = {};


   /*
    *
    *   INSTRUCTIONS
    *
    */

    const html = {
        intro: [
            `<div class='parent'>
                <p><strong>Welcome to Spin the Wheel!</strong></p>
                <p>In Spin the Wheel, you'll spin a series of prize wheels.</p>
                <p>Each time you spin a prize wheel, you'll earn points.</p>
                <p>Your goal is to earn as many points as possible by spinning the prize wheels!</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel has two numbers, like this:</p>
                <img src="./img/spinner_no-arrow.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, an arrow will appear in the center of the wheel.</p>
                <p>The arrow will point up or down.</p>
            </div>`,

            `<div class='parent'>
                <p>The number that the arrow points to gets added to your total score.</p>
                <p>In this example, the arrow points up to 15, so you'd get 15 points.</p>
                <img src="./img/spinner_up-arrow.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>In this example, the arrow points down to 5, so you'd get 5 points.</p>
                <img src="./img/spinner_down-arrow.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>The probabaility of an up arrow is shown above the wheel.</p>
                <p>The probability of a down arrow is shown below the wheel.</p>
                <p>Here, there's a 80% chance of an up arrow and a 20% chance of a down arrow:</p>
                <img src="./img/spinner_80.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, the probabilities might flip positions, like this:</p>
                <img src="./img/spinner_20.png" style="width:50%; height:50%">
                <p>Now, there's now a 80% chance of a down arrow and a 20% chance of an up arrow.</p>
            </div>`,

           `<div class='parent'>
                <p>Different wheels have different probabilities.</p>
            </div>`,

            `<div class='parent'>
                <p>For this wheel, the probabilites are 60% and 40%.</p>
                <img src="./img/spinner_60-40.png" style="width:50%; height:50%">
            </div>`,

           `<div class='parent'>
                <p>For this wheel, the probabilities are 100% and 0%:</p>
                <img src="./img/spinner_100.png" style="width:50%; height:50%">
            </div>`],

        postIntro: [
            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin!</p>
                <p>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-gif.gif" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Throughout Spin the Wheel, you'll answer questions about your feelings.</p>
                <p>Specifically, you'll report how <strong>immersed and engaged</strong> you feel while spinning each wheel,<br>
                as well as how <strong>happy</strong> you currently feel.</p>
            </div>`,      

            `<div class='parent'>
                <p>You're ready to start playing Spin the Wheel!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Spin the Wheel is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };


    const intro = {
        type: jsPsychInstructions,
        pages: html.intro,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    let correctAnswers = [
        `After each spin, I have a 60% chance of a down arrow.`, 
        `After each spin, I have a 100% chance of an up arrow.`];

    const errorMessage = {
        type: jsPsychInstructions,
        pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
        show_clickable_nav: true,
        allow_keys: false,
    };

    const attnChk = {
        type: jsPsychSurveyMultiChoice,
        preamble: `<div class='parent'>
            <p>Please answer the following questions.</p>
            </div>`,
        questions: [
            {
                prompt: "What does it mean if 60% appears below a wheel?", 
                name: `attnChk1`, 
                options: [`After each spin, I have a 60% chance of an up arrow.`, `After each spin, I have a 40% chance of a down arrow.`, `After each spin, I have a 60% chance of a down arrow.`],
            },
            {
                prompt: "What does it mean if 100% appears above a wheel?", 
                name: `attnChk2`, 
                options: [`After each spin, I have a 100% chance of an up arrow.`, `After each spin, I have a 0% chance of an up arrow.`, `After each spin, I have a 100% chance of a down arrow.`],
            },
        ],
        scale_width: 500,
        on_finish: (data) => {
              const totalErrors = getTotalErrors(data, correctAnswers);
              data.totalErrors = totalErrors;
        },
    };

    const conditionalNode = {
      timeline: [errorMessage],
      conditional_function: () => {
        const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoop = {
      timeline: [intro, attnChk, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.postIntro = {
        type: jsPsychInstructions,
        pages: html.postIntro,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    
   /*
    *
    *   TASK
    *
    */

//    let colors = [["#E8896A", "#71B1A1"], ["#E2A76F", "#6897BB"], ["#D98F8D", "#A7C957"]];
    let colors = [["#A6A6A6", "#595959"], ["#A6A6A6", "#595959"], ["#A6A6A6", "#595959"]];

    colors = jsPsych.randomization.repeat(colors, 1);

    // define each wedge
    const wedges = {
        two: {color: colors[0][0], font: 'white', label:"2", points: 2},
        five: {color: colors[1][0], font: 'white', label:"5", points: 5},
        eight: {color: colors[2][0], font: 'white', label:"8", points: 8},
        twelve: {color: colors[0][1], font: 'white', label:"12", points: 12},
        fifteen: {color: colors[1][1], font: 'white', label:"15", points: 15},
        eighteen: {color: colors[2][1], font: 'white', label:"18", points: 18},
    };


    // define each wheel
    const wheels = [

            {sectors: [ wedges.two, wedges.twelve ], wheel_id: 1, pUp: [1, 0], labels: ["100%", "0%"], ev: 3.5, sd: 1.5, mi: .714},
            {sectors: [ wedges.two, wedges.twelve ], wheel_id: 2, pUp: [.8, .2], labels: ["80%", "20%"], ev: 3.5, sd: 1.5, mi: .189},
            {sectors: [ wedges.two, wedges.twelve ], wheel_id: 3, pUp: [.6, .4], labels: ["60%", "40%"], ev: 3.5, sd: 1.5, mi: .029},

            {sectors: [ wedges.five, wedges.fifteen ], wheel_id: 4, pUp: [1, 0], labels: ["100%", "0%"], ev: 5.5, sd: 1.5, mi: .714},
            {sectors: [ wedges.five, wedges.fifteen ], wheel_id: 5, pUp: [.8, .2], labels: ["80%", "20%"], ev: 5.5, sd: 1.5, mi: .189},
            {sectors: [ wedges.five, wedges.fifteen ], wheel_id: 6, pUp: [.6, .4], labels: ["60%", "40%"], ev: 5.5, sd: 1.5, mi: .029},

            {sectors: [ wedges.eight, wedges.eighteen ], wheel_id: 7, pUp: [1, 0], labels: ["100%", "0%"], ev: 7.5, sd: 1.5, mi: .714},
            {sectors: [ wedges.eight, wedges.eighteen ], wheel_id: 8, pUp: [.8, .2], labels: ["80%", "20%"], ev: 7.5, sd: 1.5, mi: .189},
            {sectors: [ wedges.eight, wedges.eighteen ], wheel_id: 9, pUp: [.6, .4], labels: ["60%", "40%"], ev: 7.5, sd: 1.5, mi: .029},

        ];

    let scoreTracker = 0; // track current score
    let round = 1;  // track current round

    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            let sectors_randomized = jsPsych.timelineVariable('sectors');
            sectors_randomized = (Math.random() > .5) ? sectors_randomized.unshift(sectors_randomized.pop()) : sectors_randomized;
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'), jsPsych.timelineVariable('pUp'), jsPsych.timelineVariable('labels'));
        },
        canvas_size: [475, 475],
        score: function() {
            return scoreTracker
        },
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), value: jsPsych.timelineVariable('pUp'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score
        }
    };

    // trial: flow DV
    const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `During the last round,<br>how <b>immersed</b> and <b>engaged</b> did you feel spinning the wheel?`,
            name: `flow`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), value: jsPsych.timelineVariable('pUp'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            data.score = scoreArray[scoreArray.length - 1];
            saveSurveyData(data);
        }
    };

    // trial: happiness DV
    const happinessMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `How <b>happy</b> are you right now?`,
            name: `happiness`,
            labels: ['0<br>Very unhappy', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Very happy']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), value: jsPsych.timelineVariable('pUp'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            data.score = scoreArray[scoreArray.length - 2];
            saveSurveyData(data);
            round++;
        }
    };

    // timeline: main task
    p.task = {
        timeline: [spin, flowMeasure, happinessMeasure],
        repetitions: 1,
        timeline_variables: wheels,
        randomize_order: true,
    };

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: html.postTask,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const genFlowScale = ['-2<br>Totally<br>Disagree', '-1<br>Disagree', '0<br>Neither agree<br>nor disagree', '1<br>Agree', '2<br>Totally<br>Agree'];

        const flowGenQuestions = {
            type: jsPsychSurveyLikert,
            preamble:
                `<div style='padding-top: 50px; width: 900px; font-size:16px'>
                    <p>Please express the extent to which you disagree or agree with each statement.</p>
                </div>`,
            questions: [

                {
                    prompt: `I rarely find tasks only moderately engaging—I find most activities either completely immersive or extremely boring.`,
                    name: `genFlow_1`,
                    labels: genFlowScale,
                    required: true,
                },

                {
                    prompt: `I often alternate between feelings of intense engagement and complete boredom.`,
                    name: `genFlow_2`,
                    labels: genFlowScale,
                    required: true,
                },

                {
                    prompt: `For me, activities are either extremely engaging or dull—there's rarely an in-between.`,
                    name: `genFlow_3`,
                    labels: genFlowScale,
                    required: true,
                },

                {
                    prompt: `My mood often swings between being deeply engaged in what I'm doing and feeling totally bored.`,
                    name: `genFlow_4`,
                    labels: genFlowScale,
                    required: true,
                },
            ],
            randomize_question_order: false,
            scale_width: 500,
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const demos = {
            timeline: [taskComplete, flowGenQuestions, gender, age, ethnicity, english, finalWord]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "vwGeB3lWbIBU",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.consent, exp.instLoop, exp.postIntro, exp.task, exp.demographics, exp.save_data];

jsPsych.run(timeline);
