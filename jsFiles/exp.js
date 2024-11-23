

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
                <p>Each time you spin a prize wheel, you'll earn points.
                <br>The number of points you earn depends on where the wheel lands.</p>
                <p>Your goal is to earn as many points as possible by spinning the prize wheels!</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel has two wedges, like this:</p>
                <img src="./img/p25.png" style="width:40%; height:40%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, you'll earn points.<br>
                Usually, the number of points you earn will equal the number you land on.</p>
                <p>In this example, the spinner landed on 4, and 4 points were earned.<br>
                (The '+4' in the center means that 4 points were earned)</p>
                <img src="./img/noFlip-example.png" style="width:40%; height:40%">
            </div>`,

            `<div class='parent'>
                <p>Sometimes, you'll experience a "reversal."</p>
                <p>A reversal is when the number of points you earn equals the number you <strong>did not</strong> land on.</p>
                <p>In this example of a reversal, the spinner landed on 4, but 6 points were earned.<br>
                (The '+6' in the center means that 6 points were earned)</p>
                <img src="./img/flip-example.png" style="width:40%; height:40%">
            </div>`,

            `<div class='parent'>
                <p>The probability of a reversal changes from wheel to wheel.</p>
                <p>For some wheels, reversals are very likely. For others, reversal are rare.</p>
                <p>Before spinning a new wheel, you'll see a message like this one indicating the wheel's probability of reversal:</p>
                <br><br<br><br>
                <p><span style='font-size:100px'><strong>25%</strong></span>
                <br>
                <br><span style='font-size:40px'>Probability of Reversal</span></p>
            </div>`],

        postIntro: [
            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spinGif2.gif" style="width:60%; height:60%">
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
        `For the next wheel, I have a 50% chance of earning points equal to the number I didn't land on.`, 
        `For the next wheel, I have a 25% chance of earning points equal to the number I didn't land on.`, 
        `For the next wheel, I have a 0% chance of earning points equal to the number I didn't land on.`];

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
                prompt: "What does '50% probability of reversal' mean?", 
                name: `attnChk1`, 
                options: [`For the next wheel, I have a 50% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 25% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 0% chance of earning points equal to the number I didn't land on.`],
            },
            {
                prompt: "What does '25% probability of reversal' mean?", 
                name: `attnChk2`, 
                options: [`For the next wheel, I have a 50% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 25% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 0% chance of earning points equal to the number I didn't land on.`],
            },
            {
                prompt: "What does '0% probability of reversal' mean?", 
                name: `attnChk3`, 
                options: [`For the next wheel, I have a 50% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 25% chance of earning points equal to the number I didn't land on.`, `For the next wheel, I have a 0% chance of earning points equal to the number I didn't land on.`],
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


    // define each wedge
    const wedges = {
        one: {color:"#003366", label:"1"},
        two: {color:"#8B0000", label:"2"},
        three: {color:"#228B22", label:"3"},
        four: {color:"#008080", label:"4"},
        five: {color:"#800080", label:"5"},
        six: {color:"#FF8C00", label:"6"},
        seven: {color:"#4B0082", label:"7"},
        eight: {color:"#007f0e", label:"8"},
        nine: {color:"#0094fe", label:"9"},
        ten: {color:"#00497e", label:"10"},
        eleven: {color:"#0026ff", label:"11"},
        twelve: {color:"#001280", label:"12"},
        thirteen: {color:"#b100fe", label:"13"},
    };


    // define each wheel
    const wheels = [

            {sectors: [ wedges.two, wedges.four ], ev: 3, sd: 1.41, pFlip: .5},
            {sectors: [ wedges.four, wedges.six ], ev: 5, sd: 1.41, pFlip: .5},
            {sectors: [ wedges.one, wedges.five ], ev: 3, sd: 2.83, pFlip: .5},
            {sectors: [ wedges.three, wedges.seven ], ev: 5, sd: 2.83, pFlip: .5},

            {sectors: [ wedges.two, wedges.four ], ev: 3, sd: 1.41, pFlip: .25},
            {sectors: [ wedges.four, wedges.six ], ev: 5, sd: 1.41, pFlip: .25},
            {sectors: [ wedges.one, wedges.five ], ev: 3, sd: 2.83, pFlip: .25},
            {sectors: [ wedges.three, wedges.seven ], ev: 5, sd: 2.83, pFlip: .25},

            {sectors: [ wedges.two, wedges.four ], ev: 3, sd: 1.41, pFlip: 0},
            {sectors: [ wedges.four, wedges.six ], ev: 5, sd: 1.41, pFlip: 0},
            {sectors: [ wedges.one, wedges.five ], ev: 3, sd: 2.83, pFlip: 0},
            {sectors: [ wedges.three, wedges.seven ], ev: 5, sd: 2.83, pFlip: 0},


        ];

    let scoreTracker = 0; // track current score

    let round = 1;  // track current round

    // trial: spinner
    const pFlip = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
            let pEM = jsPsych.timelineVariable('pFlip');
            let pct = (pEM * 100).toFixed(0) + "%";
            let html = `<div class='pFlip-style'>
                            <p><span style='font-size:100px'><strong>${pct}</strong></span>
                            <br><br><br><br>Probability of Reversal</p>
                        </div>`;
            return html;
        },
        choices: "NO_KEYS",
        trial_duration: 3000,
        response_ends_trial: false,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('sd'), pFlip: jsPsych.timelineVariable('pFlip')},
        on_finish: function(data) {
            data.round = round;
        }
    };

    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'), jsPsych.timelineVariable('pFlip'));
        },
        canvas_size: [500, 500],
        score: function() {
            return scoreTracker
        },
        post_trial_gap: 1000,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('sd'), pFlip: jsPsych.timelineVariable('pFlip')},
        on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score
        }
    };

    // trial: flow DV
    const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `During the last round of Spin the Wheel,<br>to what extent did you feel immersed and engaged in what you were doing?`,
            name: `flow`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('sd'), pFlip: jsPsych.timelineVariable('pFlip')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 1];
            data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };

    // trial: happiness DV
    const happinessMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `How happy are you right now?`,
            name: `happiness`,
            labels: ['0<br>Very unhappy', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Very happy']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('sd'), pFlip: jsPsych.timelineVariable('pFlip')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 2];
            data.outcomes = outcomesArray[outcomesArray.length - 2];
            saveSurveyData(data);
            round++;
        }
    };

    // timeline: main task
    p.task = {
        timeline: [pFlip, spin, flowMeasure, happinessMeasure],
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
