PennController.ResetPrefix(null)

DebugOff() // don't show log and errors

Sequence(//"instructions", // welcome, instructions
        randomize("training"), // training
        //"verif-instr", randomize("verif"), // verification: instructions and trials
        //"test-instr", randomize("testing"), // testing: instructions and trials
        "language-survey", "completion") // language background and completion 

newTrial("welcome",
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
        .settings.css("font-size", "24")
        .center()
        .bold()
    
    ,newText("<p>University of California, Los Angeles<p>")
        .settings.css("font-size", "18")
        .center()
    ,newText("<p>CONSENT TO PARTICIPATE IN RESEARCH<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,newText("<p>Testing phonotactic learning<p>")
        .italic()
        .center()
        .settings.css("font-size", "18")
    ,newText("<p>Marisabel (Isa) Cabrera, from the Linguistics Department at the University of California, Los Angeles (UCLA) is conducting a research study.<p> Your participation in this research study is voluntary.<p>").center().settings.css("font-size", "18")
    ,newButton("continue","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue").remove()
    
    ,newText("<p>Why is this study being done?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p> Speakers of a language are believed to have abstract knowledge of the grammatical rules of their language, including rules about the sound structure of words.  This study investigates the relationship between that grammatical knowledge and other mental processes, such as memory or attention.  If language abilities and memory abilities rely on the same store of mental resources, then holding something in memory could interfere with speakers’ ability to use their linguistic knowledge.  However, if linguistic knowledge is separated from the rest of cognition in its own 'module' as has been claimed by Fodor (1983) and others, then we would not expect a memory task to interfere with participants' ability to use their linguistic knowledge.<p>").settings.css("font-size", "18")
    ,newText("<p>What will happen if I take part in this research study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    If you volunteer to participate in this study, the researcher will ask you to do the following:<p>").settings.css("font-size", "18")
    ,newText("<p>    •	Complete a language background questionnaire<p> <p>     •	Listen to a robot voice invent English-like words, and pronounce them while your voice is recorded. <p> <p>     •	You may be asked to rate other people’s pronounciations of those same words <p> <p>     •	You may be asked to remember short words for about 10 seconds <p>").settings.css("font-size", "18")
    ,newButton("continue6","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue6").remove()
    
    ,newText("<p>How long will I be in the research study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    Participation will take a total of about an hour.<p>").settings.css("font-size", "18")
    ,newText("<p>Are there any potential risks or discomforts that I can expect from this study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    There are no anticipated risks or discomforts.<p>").settings.css("font-size", "18")
    ,newText("<p>Are there any potential benefits if I participate?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    You will not directly benefit from your participation in the research.<p> <p>The results of the research may help us understand the relationship between linguistic knowledge and other areas of cognition, and may especially help us understand how language uses cognitive resources that are shared with other systems such as memory, attention, auditory processing, etc.<p>").settings.css("font-size", "18")
        ,newButton("continue5","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue5").remove()
    
    ,newText("<p>What other choices do I have if I choose not to participate?<p>").bold().center().settings.css("font-size", "24")
    ,
    newText("<p>    If you choose not to participate in this study, you may still receive credit for your course by choosing from a different study on SONA, or if you choose not to participate in any studies, you should contact your professor for alternative ways to receive credit.<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>Will I be paid for participating?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    You will receive 1 SONA credit for this study<p>")
        .settings.css("font-size", "18")
    
        ,newButton("continue4","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue4").remove()
    ,
    newText("<p>Will information about me and my participation be kept confidential?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    Any information that is obtained in connection with this study and that can identify you will remain confidential. It will be disclosed only with your permission or as required by law.  Identifying information such as your name, student ID number, and birth date will be kept on the secure SONA server.<p> <p>The researchers will do their best to make sure that your private information is kept confidential. Information about you will be handled as confidentially as possible, but participating in research may involve a loss of privacy and the potential for a breach in confidentiality. Study data will be physically and electronically secured.  As with any use of electronic means to store data, there is a risk of breach of data security. Your data, including de-identified data may be kept for use in future research.<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>What are my rights if I take part in this study?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    •	You can choose whether or not you want to be in this study, and you may withdraw your consent and discontinue participation at any time.<p> <p>    •	Whatever decision you make, there will be no penalty to you, and no loss of benefits to which you were otherwise entitled.<p> <p>   •	You may refuse to answer any questions that you do not want to answer and still remain in the study.<p>")
        .settings.css("font-size", "18")
    
        ,newButton("continue3","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue3").remove()
    ,
    newText("<p>Who can I contact if I have questions about this study?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>  •   The research team:<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p>    If you have any questions, comments or concerns about the research, you can talk to the one of the researchers. Please contact: <p><p><p>Dr. Claire Moore-Cantwell<p><p>559-760-7071<p><p>moore.cantwell@ucla.edu<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>•	UCLA Office of the Human Research Protection Program (OHRPP):<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p>    If you have questions about your rights as a research subject, or you have concerns or suggestions and you want to talk to someone other than the researchers, you may contact the UCLA OHRPP by phone: (310) 206-2040; by email: participants@research.ucla.edu or by mail: Box 951406, Los Angeles, CA 90095-1406.<p>")
        .settings.css("font-size", "18")
    ,
    newButton("continue2","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue2").remove()
    ,
    newText("<p>•	Use of recordings<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p>    Your voice will be recorded in this study, and we may want to use your recordings in presentations of the results of this study, such as at conferences or in web publication of the results.  Recordings will always be presented anonymously and will not be attached to your name or any other identifying information.  Please indicate whether you would like your recordings to be used for this purpose.  If you choose ‘No’, no-one besides the research team will hear or have access to your recordings.  Instead, only measurements taken from your recordings will be presented.<p>")
        .settings.css("font-size", "18")
    ,
    newDropDown("choice", "Answer")
        .settings.add("Yes","No")
        .print()
    ,
    newText("<p> Please input your Subject Code, found in the 'comments' field on your SONA signup:<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p> (Do NOT enter your course number, UID, random string of characters, or anything else here.  It must be your unique subject code from SONA in order for you to receive credit!)<p>")
        .settings.css("font-size", "20")
    ,
    newTextInput("inputID")
       .print()
    ,
    newButton("Start")
        .print()
        .wait(
            getTextInput("inputID")
                .test.text(/.+/)
                    .failure(newText("<p>You must input a code in order to receive credit.  Find this in 'comments' on your SONA account.</p>").print()))
)

// instruction
newTrial("instructions",
    defaultText
        .center()
        .print()
    ,
    newText("1", "Experiment instructions:")
        .bold()
    ,
    newText("sp1", " ")
    ,
    newText("2", "In this experiment, you will listen to a sequence of words from a simple toy language.")
    ,
    newText("sp1", " ")
    ,
    newText("3", "After learning this language, your task is to decide if some new words you hear are likely words of the simple language you learned.")
        .bold()
    ,
    newText("sp2", " ")
    ,
    newText("3", "You should decide this even if one of the two words has some noise covering some of its sounds, or even if the words don’t mean anything to you. ")
    ,
    newText("sp3", " ")
    ,
    newText("4", "Please provide your responses as quickly as possible.")
        .bold()
    ,
    newText("sp4", " ")
    ,
    newText("5", "Before we begin, adjust your volume to your desired level. Click the button below to listen. ")
    ,
    newText("sp5", " ")
    ,
    newButton("button-listen", "adjust volume")
        .center()
        .print()
        .wait()
    ,
    newAudio("audio-instr", "audio-instr-ruth.mp3")
        .play()
        .wait()
    ,
    newText("sp6", " ")
    ,
    newText("6", "Is the word you heard a word of English?")
        .bold()
    ,
    newText("7", "(Press 'a' for 'yes' and 'l' for 'no')")
        .italic()
    ,
    newKey("response", "AL")
            .log()
            .wait()
    ,
    newText("sp7", " ")
    ,
    newText("8", "The experiment will now begin. You will now listen to words from the simple language so you familiarize yourself with the language, and then provide your responses. There will be a brief questionnaire after you complete the experiment. Click the button below to start the experiment.")
        .bold()
    ,
    newText("sp8", " ")
    ,
    newButton("button-cont", "start")
        .center()
        .print()
        .wait()
    ,
)

// FAMILIARIZATION
// 32 unique words
// 20 randomized repetitions of the 32 words
// randomizations should be different across participants, so true randomization

Template("training-final.csv", row =>
    newTrial("training",
    
    newText("fixcross", "+") // create a fixation cross
        .css("font-size","80px")
        .print("center at 50%" , "center at 50%")
        .log()
    ,
    newAudio("audio", row.audiofile)
        .play()
        .wait()
    ,
    newTimer("isi", 250)
        .start()
        .wait()
    ,
    getAudio("audio")
        .wait("first")
    )
)

// VERIFICATION

// 16 pairs of minimally different nonwords, minimal pairs by chaning one of the vowels or consonants
// 8 nasal
// 8 backness
// balancing where difference lies: 2 for each of the 4 positions, 1 each violation
// original word from exposure

newTrial("verif-instr",
    defaultText
        .center()
        .print()
    ,
    newText("1", "VERIFICATION")
        .bold()
    ,
    newText("sp8", " ")
    ,
    newText("1", "VERIFICATION")
        .bold()
    ,
    newText("sp8", " ")
    ,
    newButton("button", "continue experiment")
        .center()
        .print()
        .wait()
)

Template("verif-final.csv", row =>
    newTrial("verif",
        // select masked item with random snr
        //masking = [row.mask0, row.mask4, row.mask8, row.mask_4, row.mask_8].sort(v => 0.5-Math.random())
        
        // start trial
        newText("fixcross", "+") // create a fixation cross
            .css("font-size","80px")
            .print("center at 50%" , "center at 50%")
            .log()
        ,
        newTimer("pre-recordings", 100)
            .start()
        ,
        newAudio("audio", row.audiofile)
            .play()
            .wait()
        ,
        newTimer("post-recording", 100)
            .start()
            .wait()
        ,
        getText("fixcross")
            .remove()
        ,
        newText("instr", "(Press 'a' for 'yes' and 'l' for 'no')")
            .center()
            .italic()
            .print()
        ,
        newKey("response", "AL")
            .log() // log participant response
            .wait()
        ,
        getAudio("audio")
            .wait("first")
        //,
        //newVar("RT").set(v => Date.now())
    )
    .log("group", row.group)
    .log("word", row.word)
    .log("intraining", row.intraining) // if participants responded correctly
    .log("backviols", row.backviols)
    .log("nasalviols", row.nasalviols)
)

// TESTING 
// 48 unique words not in exposure
// 24 zero violating
// 8 for each type of violation (one back, one nasal, both)
// this is regardless of the frequencies in training - what varies across groups is only the training distribution
// press 'a' for yes and 'l' for no 

newTrial("test-instr",
    defaultText
        .center()
        .print()
    ,
    newText("1", "TESTING.")
        .bold()
    ,
    newText("sp8", " ")
    ,
    newText("1", "TESTING.")
        .bold()
    ,
    newText("sp8", " ")
    ,
    newButton("button", "continue experiment")
        .center()
        .print()
        .wait()
)

Template("test-final.csv", row =>
    newTrial("testing",
        // select masked item with random snr
        //masking = [row.mask0, row.mask4, row.mask8, row.mask_4, row.mask_8].sort(v => 0.5-Math.random())
        
        // start trial
        newText("fixcross", "+") // create a fixation cross
            .css("font-size","80px")
            .print("center at 50%" , "center at 50%")
            .log()
        ,
        newTimer("pre-recordings", 100)
            .start()
        ,
        newAudio("audio", row.audiofile)
            .play()
            .wait()
        ,
        newTimer("post-recording", 100)
            .start()
            .wait()
        ,
        getText("fixcross")
            .remove()
        ,
        newText("instr", "(Press 'a' for 'yes' and 'l' for 'no')")
            .center()
            .italic()
            .print()
        ,
        newKey("response", "AL")
            .log() // log participant response
            .wait()
        ,
        getAudio("audio")
            .wait("first")
        //,
        //newVar("RT").set(v => Date.now())
    )
    //.log("group", row.group) no group in test files
    .log("word", row.word)
    .log("backviols", row.backviols)
    .log("nasalviols", row.nasalviols)
)


// LANGUAGE BACKGROUND SURVEY
newTrial("language-survey", 
    newText("Language background survey")
        .bold()
        .center()
        .print()
    ,
    newText(" ").print()
    ,
    newText("Is English your native language?")
        .print()
    ,
    newDropDown("Yes/No")
        .add("Yes", "No")
        .print()
    ,
    newText(" ").print()
    ,
    newText("At what age did you start learning English?")
        .print()
    ,
    newTextInput("feedback", "")
        .log()
        .lines(0)
        .size(350, 150)
        .print()
    ,
    newText(" ").print()
    ,
    newText("How often do you speak English? (Choose one)")
        .print()
    ,
    newDropDown("-")
        .add("Every day", "A few times a week", "Once a week", "Once a month", "Almost never")
        .print()
    ,
    newText(" ").print()
    ,
    newText("How well do you speak English? (Choose one)")
        .print()
    ,
    newDropDown("-")
        .add("Extremely fluent", "Not bad", "Only simple conversations")
        .print()
    ,
    newText(" ").print()
    ,
    newText(" ").print()
    ,
    newText("Do you speak any other language?")
        .print()
    ,
    newDropDown("Yes/No")
        .add( "Yes", "No" )
        .print()
    ,
    newText(" ").print()
    ,
    newText("Which other language(s) do you speak?")
        .print()
    ,
    newText("(If there are multiple, please list all languages you speak and answer the following questions for all languages.)")
        .print()
        .italic()
    ,
    newTextInput("feedback", "")
        .log()
        .lines(0)
        .size(350, 150)
        .print()
    ,
    newText(" ").print()
    ,
    newText("How often do you speak the language(s)?")
        .print()
    ,
    newTextInput("feedback", "")
        .log()
        .lines(0)
        .size(350, 150)
        .print()
    ,
    newText(" ").print()
    ,
    newText("How well do you speak the language(s)?")
        .print()
    ,
    newTextInput("feedback", "")
        .log()
        .lines(0)
        .size(350, 150)
        .print()
    ,
    newText(" ").print()
    ,
    newButton("button", "send results")
        .center()
        .print()
        .wait()
)

// COMPLETION SCREEN
newTrial ("completion" ,
    newText("Thank you for participation! The experiment is now over. ")
        .center()
        .print()
    ,
    newText("You may now close this page.")
        .center()
        .print()
    ,
    // Stay on this page forever
    newButton().wait()
)
