

 const randomAssignment = Math.floor(Math.random() * 2) + 1; 
// const randomAssignment = 2;

//1 = play, 2 = predict


const exp = (function() {


    var p = {};


   /*
    *
    *   INSTRUCTIONS
    *
    */

var textNew = {
    game: [2].includes(randomAssignment) ? 'Guess the Feeling' : 'Spin the Wheel',
    attnchk1: [2].includes(randomAssignment) ? 'a wheel' : 'you',
    their: [2].includes(randomAssignment) ? 'the' : 'your',
    s: [2].includes(randomAssignment) ? 's' : '',
}

    const html = {
        introPlay: [
            `<div class='parent'>
                <p><strong>Welcome to Feel the Spin!</strong></p>
               <p>This game involves a series of prize wheels, which you will spin to earn points.</p>
             </div>`,

            `<div class='parent'>
                <p>Each wheel is divided into 6 wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to your total score.</p>
                <p>In this example, you'd gain 5 points.</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:70%; height:70%">
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
                <img src="./img/arrow-up.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:70%; height:70%">      
            </div>`
            ],
        introPredict: [
            `<div class='parent'>
                <p><strong>Welcome to Feel the Spin!</strong></p>
                <p>This game involves a series of prize wheels, which players spin to earn points.</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel is divided into 6 wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to the player's total score.</p>
                <p>In this example, the player gained 5 points.</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:70%; height:70%">
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
                <img src="./img/arrow-up.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:70%; height:70%">      
            </div>`
            ],

            postPredict: [
            `<div class='parent'>
                <p>The wheel is spun by grabbing the cursor and giving it a spin.</p>
                <p>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-gif.gif" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>To get a feel for the game, you'll practice spinning two example wheels.</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        goalPredict: [
            `<div class='parentGoal'>
                <p>Your goal in Feel the Spin is to guess how an average person would feel while spinning different prize wheels. </p>
                <p>You will see a variety of wheels, each with its own set of values and probability of a standard outcome. </p>
                <p>For each wheel, your job is to guess how <b>immersed</b> and <b>absorbed</b> an average person would feel while spinning it&mdash;simply provide your best guess about the typical experience.</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        goalPlay: [
            `<div class='parentGoal'>
            <p>Your goal in Feel the Spin is to spin the wheels and earn as many points as possible.</p>
            <p>You will see a variety of wheels, each with its own set of values and probability of a standard outcome. For each wheel, your job is to spin the wheel and earn as many points as possible.</p>
            <p>Also, after each wheel, you will describe your feelings. Specifically, you will report how <b>immersed</b> and <b>absorbed</b> you felt spinning each wheel.</p>
            <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postPlay: [
            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin.</p>
                <p>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-gif.gif" style="width:70%; height:70%">
            </div>`,

            `<div class='parent'>
                <p>To get a feel for the game, you'll practice spinning two example wheels.</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,     
        ],

        readyPlay: [
            `<div class='parent'>
             <p>You're now ready to play Feel the Spin!</p> 
             <p> Click "Next" to continue. </p>
        </div>`
        ],

        readyPredict: [
            `<div class='parent'>
             <p>You're now ready to play Feel the Spin!</p> 
             <p> Click "Next" to continue. </p>
        </div>`
        ],

        postTaskPlay: [
            `<div class='parent'>
                <p>The game is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],

        postTaskPredict: [
            `<div class='parent'>
                <p>The game is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };

    const consent = `
    <div class='parent' style='height: 1000px; width: 1000px'>
    <p><b>Consent Form<br>

    <p><b>Description</b><br>
    You are invited to participate in a research study on how humans enjoy different tasks. You'll be asked to participate in a short game that involves spinning the wheel. Then you'll be asked to answer various questions about your experience.</p>

    <p><b>Time Involvement</b><br>
    Your participation will take approximately 15 minutes. 

    <p><b>Risks and Benefits</b><br>
    The risks associated with this study are not anticipated to be beyond those involved in normal, daily computer use. There are no foreseeable psychological risks and benefits beyond those involved in normal, daily life. The benefits which may reasonably be expected to result from this study are none. We cannot and do not guarantee or promise that you will receive any benefits from this study.
    
    <p><b>Payment</b><br>
    You will receive $2.75 payment for your participation. You'll receive an additional bonus based on your performance in the experiment.  

     <p><b>Payment</b><br>
    If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. The alternative is not to participate. You have the right to refuse to answer particular questions. The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your individual privacy will be maintained in all published and written data resulting from the study.
    In accordance with scientific norms, the data from this study may be used or shared with other researchers for future research (after removing personally identifying information) without additional consent from you.

    <p><b>Contact Information:</b><br>
    Questions: If you have any questions, concerns or complaints about this research, its procedures, risks and benefits, contact the Protocol Director, Josephine Tan (josetan@stanford.edu) or Assistant Professor David Melnikoff (dmelnik@stanford.edu).
    Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906, or email at irbnonmed@stanford.edu. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306. </p>
    <p>If you agree to participate, press the "Next" button to indicate that you consent to participate in the study.</p>`



    const introPredict = {
        type: jsPsychInstructions,
        pages: html.introPredict,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    const introPlay = {
        type: jsPsychInstructions,
        pages: html.introPlay,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };


let correctAnswers = [`100%`, `80%`, `40%`, `20%`];

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
                prompt: `If ${textNew.attnchk1} land${textNew.s} on a 9 and there's a 100% chance of a standard outcome, what are ${textNew.their} chances of earning 9 points?`, 
                name: `attnChk1`, 
                options: ['100%', '80%', '40%', '20%'],
            },
            {
                prompt: `If ${textNew.attnchk1} land${textNew.s} on a 9 and there's a 80% chance of a standard outcome, what are ${textNew.their} chances of earning 9 points?`, 
                name: `attnChk2`, 
                options: ['100%', '80%', '40%', '20%'],
            },
            {
                prompt: `If ${textNew.attnchk1} land${textNew.s} on a 9 and there's a 40% chance of a standard outcome, what are ${textNew.their} chances of earning 9 points?`, 
                name: `attnCh3`, 
                options: ['100%', '80%', '40%', '20%'],
            },
            {
                prompt: `If ${textNew.attnchk1} land${textNew.s} on a 9 and there's a 20% chance of a standard outcome, what are ${textNew.their} chances of earning 9 points?`, 
                name: `attnCh4`, 
                options: ['100%', '80%', '40%', '20%'],
            },
        ],
        scale_width: 500,
        on_finish: (data) => {
              const totalErrors = getTotalErrors(data, correctAnswers);
              data.totalErrors = totalErrors;
        },
    };

let correctAnswers1;

if (randomAssignment === 2) {
  correctAnswers1 = `Guess how an average person would feel while spinning the wheel.`;
} else {
  correctAnswers1 = `Spin the wheel and earn points.`;
}

    const errorMessage1 = {
        type: jsPsychInstructions,
        pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
        show_clickable_nav: true,
        allow_keys: false,
    };

const attnChk1 = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div class='parent'><p>Please answer the question.</p></div>`,
    questions: [
        {
            prompt: `What is your goal?`, 
            name: `attnChk5`, 
            options: [`Spin the wheel and earn points.`, `Guess how an average person would feel while spinning the wheel.`],
        },
    ],
    scale_width: 500,
    on_finish: (data) => {
        const response = data.response.attnChk5;
        data.correct = response === correctAnswers1;
        data.totalErrors = response === correctAnswers1 ? 0 : 1;
    },
};

    const conditionalNode = {
      timeline: [errorMessage],
      conditional_function: () => {
        const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoopPredict = {
      timeline: [introPredict, attnChk, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoopPlay = {
      timeline: [introPlay, attnChk, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoopPredict1 = {
      timeline: [attnChk1, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoopPlay1 = {
      timeline: [attnChk1, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.postPlay = {
        type: jsPsychInstructions,
        pages: html.postPlay,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.postPredict = {
        type: jsPsychInstructions,
        pages: html.postPredict,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.goalPlay = {
        type: jsPsychInstructions,
        pages: html.goalPlay,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.goalPredict = {
        type: jsPsychInstructions,
        pages: html.goalPredict,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.readyPlay = {
        type: jsPsychInstructions,
        pages: html.readyPlay,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.readyPredict = {
        type: jsPsychInstructions,
        pages: html.readyPredict,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.consent = {
        type: jsPsychInstructions,
        pages: [consent],
        show_clickable_nav: true,
        post_trial_gap: 500,
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
    const n_numbers = 9;
    const n_wedges = 6;
    const superset = Array.from({ length: n_numbers }, (_, i) => i + 1);
    const cardinality = sample([...Array(n_wedges - 1).keys()].map(x => x + 2), 1)[0]; // cardinality is always more than 2
    const subset = sample([...superset], cardinality, false);
    const alpha_param = Array(cardinality).fill(1);
    const probs = getRandomDirichlet(alpha_param);
    const n_remainder = n_wedges - cardinality;
    let final_set;

   if (cardinality === 6) {
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

/*
function mapToWedges(numbers) {
    const numberNames = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    return numbers.map(num => wedges[numberNames[num - 1]]);
}
*/
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
        { reliability: 0.90, label: '90%' },
        { reliability: 0.80, label: '80%' },
        { reliability: 0.70, label: '70%' },
        { reliability: 0.60, label: '60%' },
        { reliability: 0.50, label: '50%' },
        { reliability: 0.40, label: '40%' },
        { reliability: 0.30, label: '30%' },
        { reliability: 0.20, label: '20%' },
    ];


function createSpinnerTrialData() {
    const finalNumbers = generateWedges();
    const sectors = mapToWedges(finalNumbers);
    const ev = calculateEV(finalNumbers);
    const sd = calculateSD(finalNumbers);
    const uniformity = calculateUniformity(finalNumbers);
    const cardinality = calculateCardinality(finalNumbers);
    
    const randomIndex = Math.floor(Math.random() * reliabilityOptions.length);
    const { reliability, label } = reliabilityOptions[randomIndex];

    return {
        sectors: sectors,
        ev: ev,
        sd: sd,
        uniformity: uniformity,
        cardinality: cardinality,
        reliability: reliability,
        label: label,
        arrangement: '1'.repeat(20)
    };
}


/* for preview */

const previewNumbers = [1, 2, 3, 4, 5, 6];

const previewSectors = mapToWedges(previewNumbers);

const previewWheel1Data = {
  sectors: previewSectors,
  ev: calculateEV(previewNumbers),
  sd: calculateSD(previewNumbers),
  uniformity: calculateUniformity(previewNumbers),
  cardinality: calculateCardinality(previewNumbers),
  reliability: 1,
  label: '100%',
  arrangement: '1'.repeat(20)
};

const previewWheel2Data = {
  sectors: previewSectors,
  ev: calculateEV(previewNumbers),
  sd: calculateSD(previewNumbers),
  uniformity: calculateUniformity(previewNumbers),
  cardinality: calculateCardinality(previewNumbers),
  reliability: 0.2,
  label: '20%',
  arrangement: '1'.repeat(20)
};


const spinnerTrialData = createSpinnerTrialData();

/* 
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

        ]; */

    let scoreTracker = 0; // track current score
    let round = 0;  // track current round

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
data: function() {
  const sectors = jsPsych.timelineVariable('sectors');
  return {
    ev: jsPsych.timelineVariable('ev'),
    sd: jsPsych.timelineVariable('sd'),
    reliability: jsPsych.timelineVariable('reliability'),
    uniformity: jsPsych.timelineVariable('uniformity'),
    cardinality: jsPsych.timelineVariable('cardinality'),
    points: sectors.map(s => s.points)
  };
},        on_finish: function(data) {
        }
    };

const resetScoreTracker = {
  type: jsPsychCallFunction,
  func: () => {
    scoreTracker = 0;
  }
};


let secondPreview = true; 
    const preSpinPractice = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
            let pct = jsPsych.timelineVariable('label');
            let html = `<div class="pFlip-style">
  <p style="font-size:30px;">
    <strong><u><p>Practice Round</u></strong></p>
  </p>
  <p style="font-size:100px;">
    <strong>${pct}</strong>
  </p>
  <p>
    chance of standard outcome
  </p>
</div>`;
            return html;
        },
        choices: "NO_KEYS",
        trial_duration: 5000,
        response_ends_trial: false,
data: function() {
  const sectors = jsPsych.timelineVariable('sectors');
  return {
    ev: jsPsych.timelineVariable('ev'),
    sd: jsPsych.timelineVariable('sd'),
    reliability: jsPsych.timelineVariable('reliability'),
    uniformity: jsPsych.timelineVariable('uniformity'),
    cardinality: jsPsych.timelineVariable('cardinality'),
    points: sectors.map(s => s.points)
  };
},           on_finish: function(data) {
            data.round = round;
            secondPreview = true;
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
data: function() {
  const sectors = jsPsych.timelineVariable('sectors');
  return {
    ev: jsPsych.timelineVariable('ev'),
    sd: jsPsych.timelineVariable('sd'),
    reliability: jsPsych.timelineVariable('reliability'),
    uniformity: jsPsych.timelineVariable('uniformity'),
    cardinality: jsPsych.timelineVariable('cardinality'),
    points: sectors.map(s => s.points)
  };
},          on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score;
        }
    };


const staticSpin = {
  type: jsPsychSurveyLikert,
preamble: function() {
  let pct = jsPsych.timelineVariable('label');
  return `
<div style="text-align:center;">
  <canvas id="staticWheelCanvas" width="475" height="475" style="border:1px solid #ccc; margin-bottom: 10px;"></canvas>
  <div style="margin-top: 10px;">
    <strong>${pct} chance of standard outcome</strong>
  </div>
</div>
  `;
},
  questions: [
    {prompt: `To what extent do you think an average person would feel <b>immersed</b> and <b>absorbed</b> spinning this wheel?`,
      name: 'predicted_flow',
      labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely'],
      required: true,
      horizontal: true
    },
 /*   {prompt: `To what extent do you think an average person would <b>like</b> spinning this wheel?`,
      name: 'predicted_enjoy',
      labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely'],
      required: true,
      horizontal: true
    } */
  ],
  data: function() {
  const sectors = jsPsych.timelineVariable('sectors');
  return {
    ev: jsPsych.timelineVariable('ev'),
    sd: jsPsych.timelineVariable('sd'),
    reliability: jsPsych.timelineVariable('reliability'),
    uniformity: jsPsych.timelineVariable('uniformity'),
    cardinality: jsPsych.timelineVariable('cardinality'),
    points: sectors.map(s => s.points)
  };
},     on_load: function () {
    const canvas = document.getElementById('staticWheelCanvas');
    const sectors = jsPsych.timelineVariable('sectors');
    drawWheelOnce(canvas, sectors);
  },
  on_finish: function (data) {
    round++;
    data.round = round;
    saveSurveyData(data);
    data.trial_Name = 'PredictedFlow'; 
  },
};


    // trial: flow DV
 const flowMeasure = {
  type: jsPsychSurveyLikert,
  questions: [
    {
      prompt: `To what extent did you feel <b>immersed</b> and <b>absorbed</b> spinning the last wheel?`,
      name: `flow`,
      labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']
    },
    /*
    {
      prompt: `How much did you <b>like</b> Spinning the Wheel?`,
      name: `enjoy`,
      labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']
    } */
  ],
  randomize_question_order: false,
  scale_width: 600,

  data: function() {
    const sectors = jsPsych.timelineVariable('sectors');
    return {
      ev: jsPsych.timelineVariable('ev'),
      sd: jsPsych.timelineVariable('sd'),
      reliability: jsPsych.timelineVariable('reliability'),
      uniformity: jsPsych.timelineVariable('uniformity'),
      cardinality: jsPsych.timelineVariable('cardinality'),
      points: sectors.map(s => s.points)
    };
  },

  on_finish: function(data) {
    // Optional: only increment if data.round is already defined
    round++;
    // Add last score if available
    let scoreArray = jsPsych.data.get().select('score').values;
    data.score = scoreArray[scoreArray.length - 1];

    // Save flow and enjoy into their own top-level fields
    const response = data.response || {};
    data.flow = response.flow;
  //  data.enjoy = response.enjoy;

    // Save via your custom function
    saveSurveyData(data);
    data.round = round;
    data.outcomes_wedges = jsPsych.data.get().last(2).values()[0].outcomes_wedges;
    data.outcomes_points = jsPsych.data.get().last(2).values()[0].outcomes_points;
    data.trial_Name = 'FlowMeasure'; 

  }
};

    // trial: happiness DV
/*
    const enjoymentMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `How much did you like Spinning the Wheel?`,
            name: `happiness`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,
 data: function() {
  const sectors = jsPsych.timelineVariable('sectors');
  return {
    ev: jsPsych.timelineVariable('ev'),
    sd: jsPsych.timelineVariable('sd'),
    reliability: jsPsych.timelineVariable('reliability'),
    uniformity: jsPsych.timelineVariable('uniformity'),
    cardinality: jsPsych.timelineVariable('cardinality'),
    points: sectors.map(s => s.points)
  };
},          on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            data.score = scoreArray[scoreArray.length - 2];
            saveSurveyData(data);
 //           data.round++;
        }
    }; */


//for preview
const previewBlock1 = {
  timeline: [preSpinPractice, spin],
  timeline_variables: [previewWheel1Data]
};

const previewBlock2 = {
  timeline: [resetScoreTracker, preSpinPractice, spin],
  timeline_variables: [previewWheel2Data]
};

// for actual task
const nRepeats = 18;
const spinBlocks = [];

for (let i = 0; i < nRepeats; i++) {
  const blockTimeline = [];

  if (i === 0) {
    blockTimeline.push(resetScoreTracker); // only for the first block
  }

  blockTimeline.push(preSpin, spin, flowMeasure);

  spinBlocks.push({
    timeline: blockTimeline,
    timeline_variables: [createSpinnerTrialData()]
  });
}

p.preview = {
    timeline: [previewBlock1, previewBlock2],
    randomize_order: false, 
};

p.task = {
    timeline: [...spinBlocks],
    randomize_order: false, 
};



const nRepeatsStatic = 18;
const staticSpinBlocks = [];

for (let i = 0; i < nRepeatsStatic; i++) {
    staticSpinBlocks.push({
        timeline: [staticSpin],  
        timeline_variables: [createSpinnerTrialData()]  // or a variant for static if needed
    });
}


p.taskPredict = {
    timeline: [...staticSpinBlocks],
    randomize_order: false, 
};

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskCompletePlay = {
            type: jsPsychInstructions,
            pages: html.postTaskPlay,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const taskCompletePredict = {
            type: jsPsychInstructions,
            pages: html.postTaskPredict,
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
let demos;

if (randomAssignment === 1) {
    demos = {
        timeline: [taskCompletePlay, gender, age, ethnicity, english, finalWord]
    };
} else {
    demos = {
        timeline: [taskCompletePredict, gender, age, ethnicity, english, finalWord]
    };
}

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
        experiment_id: "133taaH9iM67",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    p.end = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<p>Thank you! Please press the button to submit your response and exit the page. </p>',
        choices: ['Submit!'],
        on_finish: (data) => {
            saveSurveyData(data); 
            },
        };

    return p;

}());



// const timeline = [exp.instLoop, exp.postPlay, exp.preview, exp.readyPlay, exp.task];
let timeline;


if (randomAssignment === 1) {
    timeline = [exp.consent, exp.instLoopPlay, exp.postPlay, exp.preview,  exp.goalPlay, exp.instLoopPlay1, exp.readyPlay, exp.task, exp.demographics, exp.save_data, exp.end];
   //timeline = [exp.consent, exp.instLoopPlay, exp.postPlay, exp.preview, exp.goalPlay, exp.instLoopPlay1, exp.readyPlay, exp.task, exp.demographics, exp.save_data, exp.end];
 // [exp.instLoopPlay, exp.postPlay, exp.preview, exp.readyPlay, exp.task, exp.demographics];
} else {
      timeline = [exp.consent, exp.instLoopPredict, exp.postPredict, exp.preview, exp.goalPredict, exp.instLoopPredict1, exp.readyPredict, exp.taskPredict, exp.demographics, exp.save_data, exp.end];
 //timeline = [exp.taskPredict, exp.demographics, exp.save_data, exp.end];

}


// const timeline = [exp.consent, exp.instLoop, exp.postIntro, exp.task, exp.demographics, exp.save_data];

jsPsych.run(timeline);
