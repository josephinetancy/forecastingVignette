

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
                <p>With each spin, you'll earn points.</p>
                <p>Your goal is to earn as many points as possible!</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel is divided into four wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to your total score.</p>
                <p>In this example, you'd gain 5 points.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome changes from wheel to wheel.</p>
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome is displayed before each wheel.</p>
                <p>For example, this message means that the next wheel has a 75% chance of a standard outcome and a 25% chance of a random outcome.</p>
                <img src="./img/outcome-75.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>After each spin, the arrow at the center of the wheel will change directions.</p>
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point up:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:50%; height:50%">      
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

    let correctAnswers = [`100%`, `75%`, `50%`, `25%`, `Earn as many points as possible.`];

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
                prompt: `If you land on a 9 and there's a 100% chance of a standard outcome, what are your chances of earning 9 points?`, 
                name: `attnChk1`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 75% chance of a standard outcome, what are your chances of earning 9 points?`, 
                name: `attnChk2`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 50% chance of a standard outcome, what are your chances of earning 9 points?`, 
                name: `attnCh3`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `If you land on a 9 and there's a 25% chance of a standard outcome, what are your chances of earning 9 points?`, 
                name: `attnCh4`, 
                options: ['100%', '75%', '50%', '25%'],
            },
            {
                prompt: `What is your goal?`, 
                name: `attnChk5`, 
                options: [`Get as many standard outcomes as possible.`, `Get as many random outcomes as possible.`, `Earn as many points as possible.`],
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

/*

    let colors = [
     //   ["#D4A373", "#81B29A", "#E07A5F", "#3D405B"], 
        ["#6A9FB5", "#F4D35E", "#EE964B", "#736CED"], 
        ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"]
    ];

    colors = jsPsych.randomization.repeat(colors, 1);
*/
    // define each wedge

    const wedges = {
  one:       { color: "#fe0000", font: 'white', label: "1",  points: 1 },
  two:       { color: "#800001", font: 'white', label: "2",  points: 2 },
  three:     { color: "#fe6a00", font: 'white', label: "3",  points: 3 },
  four:      { color: "#803400", font: 'white', label: "4",  points: 4 },
  five:      { color: "#ffd800", font: 'white', label: "5",  points: 5 },
  six:       { color: "#806b00", font: 'white', label: "6",  points: 6 },
  seven:     { color: "#00fe21", font: 'white', label: "7",  points: 7 },
  eight:     { color: "#007f0e", font: 'white', label: "8",  points: 8 },
  nine:      { color: "#0094fe", font: 'white', label: "9",  points: 9 },
  ten:       { color: "#00497e", font: 'white', label: "10", points: 10 },
  eleven:    { color: "#0026ff", font: 'white', label: "11", points: 11 },
  twelve:    { color: "#001280", font: 'white', label: "12", points: 12 },
  thirteen:  { color: "#e6194b", font: 'white', label: "13", points: 13 },
  fourteen:  { color: "#3cb44b", font: 'white', label: "14", points: 14 },
  fifteen:   { color: "#838996", font: 'white', label: "15", points: 15 },
  sixteen:   { color: "#4363d8", font: 'white', label: "16", points: 16 },
  seventeen: { color: "#f58231", font: 'white', label: "17", points: 17 },
  eighteen:  { color: "#911eb4", font: 'white', label: "18", points: 18 },
  nineteen:  { color: "#46f0f0", font: 'white', label: "19", points: 19 },
  twenty:    { color: "#f032e6", font: 'white', label: "20", points: 20 }
};



/*
    const wedges = {
        one: {color: colors[0][0], font: 'white', label:"1", points: 1},
        three: {color: colors[0][1], font: 'white', label:"3", points: 3},
        five_1: {color: colors[0][2], font: 'white', label:"5", points: 5},
        seven_1: {color: colors[0][3], font: 'white', label:"7", points: 7},

        five_2: {color: colors[1][0], font: 'white', label:"5", points: 5},
        seven_2: {color: colors[1][1], font: 'white', label:"7", points: 7},
        nine: {color: colors[1][2], font: 'white', label:"9", points: 9},
        eleven: {color: colors[1][3], font: 'white', label:"11", points: 11},
    }; 

*/

function getRandomDirichlet(alpha) {
    const gammaSamples = alpha.map(a => {
        let sum = 0;
        for (let i = 0; i < 12; i++) sum += Math.random();
        return -Math.log(sum / 12) * a;
    });
    const total = gammaSamples.reduce((a, b) => a + b, 0);
    return gammaSamples.map(v => v / total);
};

function sample(array, size, replace = false, probs = null) {
    const result = [];
    const weights = probs ? [...probs] : Array(array.length).fill(1);

    for (let i = 0; i < size; i++) {
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        let r = Math.random() * totalWeight;
        let j = 0;
        while (r > weights[j]) {
            r -= weights[j];
            j++;
        };
        result.push(array[j]);
        if (!replace) {
            weights.splice(j, 1);
            array.splice(j, 1);
        };
    };
    return result;
};

function generateWedges() {
    const n_numbers = 20;
    const n_wedges = 10;
    const superset = Array.from({ length: n_numbers }, (_, i) => i + 1);
    const cardinality = sample([...Array(n_wedges).keys()].map(x => x + 1), 1)[0];
    const subset = sample([...superset], cardinality, false);
    const alpha_param = Array(cardinality).fill(1);
    const probs = getRandomDirichlet(alpha_param);
    const n_remainder = n_wedges - cardinality;
    let final_set;

    if (cardinality === 1) {
        final_set = Array(n_wedges).fill(subset[0]);
    } else if (cardinality === 10) {
        final_set = subset.slice().sort((a, b) => a - b);
    } else {
        const remainder = sample([...subset], n_remainder, true, probs);
        final_set = subset.concat(remainder).sort((a, b) => a - b);
    }

    return final_set;
}

function mapToWedges(numbers) {
    const numberNames = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen', 'twenty'
    ];
    return numbers.map(num => wedges[numberNames[num - 1]]);
}

function calculateEV(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

function calculateSD(numbers) {
    const mean = calculateEV(numbers);
    const variance = numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
}

function calculateUniformity(numbers) {
    const unique = new Set(numbers);
    return unique.size / numbers.length;
}

function calculateCardinality(numbers) {
    const unique = new Set(numbers);
    return unique.size;
}

const reliabilityOptions = [
  { reliability: 1, label: '100%' },
  { reliability: 0.75, label: '75%' },
  { reliability: 0.25, label: '25%' },
  { reliability: 0.1, label: '10%' }
];

// Randomly pick one
const randomIndex = Math.floor(Math.random() * reliabilityOptions.length);
const { reliability, label } = reliabilityOptions[randomIndex];

// Generate the 10-number set for jsPsych timeline
const finalNumbers = generateWedges();
const sectors = mapToWedges(finalNumbers);

//const sectors = Object.values(wedges);

const ev = calculateEV(finalNumbers);
const sd = calculateSD(finalNumbers);
const uniformity = calculateUniformity(finalNumbers);
const cardinality = calculateCardinality(finalNumbers);


// Your timeline variable:
const spinnerTrialData = [
    {
        sectors: sectors,
        ev: ev,
        sd: sd,
        uniformity: uniformity,
        cardinality: cardinality,
        reliability: reliability,
        label: label,
        arrangement: '1'.repeat(20)  // string of twenty 1's
    }
];

console.log(spinnerTrialData)

    // define each wheel
    const wheels = [

            {sectors: [ wedges.one, wedges.three, wedges.five_1, wedges.seven_1 ], wheel_id: 1, reliability: 1, label: "100%", ev: 4, sd: 2, mi: 2},
            {sectors: [ wedges.one, wedges.three, wedges.five_1, wedges.seven_1 ], wheel_id: 2, reliability: .75, label: "75%", ev: 4, sd: 2, mi: .792},
            {sectors: [ wedges.one, wedges.three, wedges.five_1, wedges.seven_1 ], wheel_id: 3, reliability: .5, label: "50%", ev: 4, sd: 2, mi: .208},
            {sectors: [ wedges.one, wedges.three, wedges.five_1, wedges.seven_1 ], wheel_id: 4, reliability: .25, label: "25%", ev: 4, sd: 2, mi: 0},

            {sectors: [ wedges.five_2, wedges.seven_2, wedges.nine, wedges.eleven ], wheel_id: 5, reliability: 1, label: "100%", ev: 8, sd: 2, mi: 2},
            {sectors: [ wedges.five_2, wedges.seven_2, wedges.nine, wedges.eleven ], wheel_id: 6, reliability: .75, label: "75%", ev: 8, sd: 2, mi: .792},
            {sectors: [ wedges.five_2, wedges.seven_2, wedges.nine, wedges.eleven ], wheel_id: 7, reliability: .5, label: "50%", ev: 8, sd: 2, mi: .208},
            {sectors: [ wedges.five_2, wedges.seven_2, wedges.nine, wedges.eleven ], wheel_id: 8, reliability: .25, label: "25%", ev: 8, sd: 2, mi: 0},

        ];

    let scoreTracker = 0; // track current score
    let round = 1;  // track current round

    const preSpin = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
            let pct = jsPsych.timelineVariable('label');
            let html = `<div class='pFlip-style'>
                            <p><span style='font-size:100px'><strong>${pct}</strong></span>
                            <br><br><br>chance of standard outcome</p>
                        </div>`;
            return html;
        },
        choices: "NO_KEYS",
        trial_duration: 5000,
        response_ends_trial: false,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), reliability: jsPsych.timelineVariable('reliability'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
        }
    };

    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'), jsPsych.timelineVariable('reliability'), jsPsych.timelineVariable('label'));
        },
        canvas_size: [475, 475],
        score: function() {
            return scoreTracker
        },
        random_prob: jsPsych.timelineVariable('label'),
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), reliability: jsPsych.timelineVariable('reliability'), mi: jsPsych.timelineVariable('mi')},
        on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score
        }
    };

    // trial: flow DV
    const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `During the last round of Spin the Wheel,<br>to what extent did you feel <b>immersed</b> and <b>engaged</b> in what you were doing?`,
            name: `flow`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), reliability: jsPsych.timelineVariable('reliability'), mi: jsPsych.timelineVariable('mi')},
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
        data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), sd: jsPsych.timelineVariable('sd'), reliability: jsPsych.timelineVariable('reliability'), mi: jsPsych.timelineVariable('mi')},
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
        timeline: [preSpin, spin, flowMeasure, happinessMeasure],
        repetitions: 1,
        timeline_variables: spinnerTrialData,
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

const timeline = [exp.task];

// const timeline = [exp.consent, exp.instLoop, exp.postIntro, exp.task, exp.demographics, exp.save_data];

jsPsych.run(timeline);
