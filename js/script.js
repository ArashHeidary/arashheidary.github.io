/*************************************
             Preloader
*************************************/
$(window).on('load', function() {
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(500).fadeOut();
});

/*************************************
           Responsive Tabs
*************************************/
$(function () {
    $("#skills-tabs").responsiveTabs({
        animation: 'slide'
    });
    $(".r-tabs-accordion-title").parent().addClass("text-center");
});

/*************************************
             Navigation
*************************************/
$(function() {
    if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
        $("nav").addClass("nav-back");
    }
    else {
        $("nav").removeClass("nav-back");
    }

    $(window).scroll(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })

    $(window).resize(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })
})

$(function() {
    $(".smooth-class").click(function(event) {
        event.preventDefault();
        const section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250)
    })
})

/*************************************
           Skills Buttons
*************************************/
const activeClassInSkills = (id, context) =>  {
    if ($('#' + id).parent().hasClass("skill-" + context + "-active-button")) return;
    $(".skill-" + context + "-active-button").removeClass("skill-" + context + "-active-button")
    $('#' + id).parent().addClass("skill-" + context + "-active-button");
};

const changeInformationSkill = (context, header, info, items=[]) => {
    $('#' + context + ' h4').text(header);
    $('#' + context + ' p').text(info);
    itemUl = document.querySelector(`#${context} ul`);
    itemUl.innerText = "";
    for (item of items) {
        itemLi = document.createElement("li");
        emTag = document.createElement("em");
        itemLi.appendChild(emTag);
        emTag.innerText = item;
        itemUl.appendChild(itemLi);
    }
}

$('#btn-skill-electronics-micro').on('click', function(){
    activeClassInSkills('btn-skill-electronics-micro', "electronics");
    const header = "Microcontrollers";
    const info = "I have a solid understanding of hardware and functionality of Microcontrollers. Other than bare-metal C or C++ Programming, I have experience utilising other tolls such as FreeRTOS in ARM and ESP8266 Microcontrollers.";
    const items = ["ARM", "AVR / PIC / Arduino", "FreeRTOS", "C / C++ / Assembly"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-pcb').on('click', function(){
    activeClassInSkills('btn-skill-electronics-pcb', "electronics");
    const header = "PCB Design";
    const info = "Due to lack of performed projects, I am not a skilled PCB Designer, but I am completely familiar with PCB Design tools such as Altium Designer.";
    const items = ["Altium Desinger"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-iot').on('click', function(){
    activeClassInSkills('btn-skill-electronics-iot', "electronics");
    const header = "Internet of Things";
    const info = "I carried out some IoT-based Projects using ESP8266, Arduino and Raspberry Pi. I'm aware of IoT Protocols such as Zigbee, WiFi, Bluetooth, etc.";
    const items = ["Raspberry Pi", "Arduino / ESP8266", "Bluetooth / Zigbee / Wifi / ..."];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-fpga').on('click', function(){
    activeClassInSkills('btn-skill-electronics-fpga', "electronics");
    const header = "FPGA";
    const info = "Similar to PCB Design, due to lack of performed projects, I'm not a skilled FPGA developer, but I know Verilog and VHDL.";
    const items = ["VHDL", "Verilog"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-ml-ml').on('click', function(){
    activeClassInSkills('btn-skill-ml-ml', "ml");
    const header = "Machine Learning";
    const info = "I have inquired more than 3 years about Machine Learning and Deep Learning algorithms. R and Python are the languages I use to develop artificial intelligence projects.";
    const items = ["R / Python", "Sci-Kit Learn / MLlib", "TensorFlow / PyTorch"];
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-ml-web').on('click', function(){
    activeClassInSkills('btn-skill-ml-web', "ml");
    const header = "Web Crawling";
    const info = "Learning web crawling was easy for me. I have HTML/CSS knowledge and I can use Scrapy, Selenium, and Beautiful Soup to extract information from different websites.";
    const items = ["Scrapy", "Selenium", "Beautiful Soup"];
    changeInformationSkill('skill-ml-information', header, info, items);
});


$('#btn-skill-ml-tableau').on('click', function(){
    activeClassInSkills('btn-skill-ml-tableau', "ml");
    const header = "Data Mining and Analysis";
    const info = "Data Mining and Analysis are two major steps in business intelligence. I can use programming languages such as python and R and other tools such as Tableau to extract information from data and present the results graphically.";
    const items = ["Tableau", "RapidMiner / KNIME","Pandas / Matplotlib / Seaborn / Plotly", "ggplot"]
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-ml-aws').on('click', function(){
    activeClassInSkills('btn-skill-ml-aws', "ml");
    const header = "Amazon Web Services";
    const info = "AWS is one of the best cloud services, and many developers use it for many purposes. I'm aware that the only purpose of AWS is not for machine learning, but I'm mainly familiar with its machine learning services.";
    const items = ["S3 / EC2 / IAM / RDS", "SageMaker / Athena / Glue / Kineses / QuickSight", "Rekongnition / Lex / Comprehend / ..."];
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-programming-lang').on('click', function(){
    activeClassInSkills('btn-skill-programming-lang', "programming");
    const header = "Programming Languages";
    const info = "I know many different Programming Languages for different purposes.";
    const items = ["Python", "C / C++ / Cuda C", "JavaScript", "R", "Matlab"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-gui').on('click', function(){
    activeClassInSkills('btn-skill-programming-gui', "programming");
    const header = "GUI Design";
    const info = "I enjoy designing GUI for desktop and Smartphones. I needed GUI Programming to connect my IoT projects with smartphones or other embedded systems with desktop to represent the functionality of the developed project visually and more delightful.";
    const items = ["PyQt / Qt", "TKinter", "Electron", "React Native"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-web').on('click', function(){
    activeClassInSkills('btn-skill-programming-web', "programming");
    const header = "Web Development";
    const info = "With IoT projects, sometimes it's a must to control the designed system over the Internet. Because of that, I have developed my web development skills. I don't call myself a full-stack developer, but I have the required knowledge to be one. I've designed this website myself.";
    const items = ["HTML / CSS / JavaScript", "Flask / NodeJS", "RESTful"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-db').on('click', function(){
    activeClassInSkills('btn-skill-programming-db', "programming");
    const header = "Other Skills";
    const info = "I am completely familiar with Git. Other than that, I have experience working with both relational and non-relational databases.";
    const items = ["Git", "SQL", "MongoDB"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-others-network').on('click', function(){
    activeClassInSkills('btn-skill-others-network', "others");
    const header = "Network";
    const info = "I think every electronics engineer should familiarise himself/herself with Networking. I have a solid understanding of how Networking and the Internet work, how routers use IP addresses to route, etc. I should state that I don't know much about configuring Cisco Routers (CCNA).";
    changeInformationSkill('skill-others-information', header, info);
});

$('#btn-skill-others-comptia').on('click', function(){
    activeClassInSkills('btn-skill-others-comptia', "others");
    const header = "CompTIA A+";
    const info = "Well, I have never taken the CompTIA A+ test. I just like Geek stuff and took two courses about it on Udemy.";
    changeInformationSkill('skill-others-information', header, info);
});

$('#btn-skill-others-linux').on('click', function(){
    activeClassInSkills('btn-skill-others-linux', "others");
    const header = "Linux";
    const info = "Because Raspberry Pi uses a specific distribution of Linux, I had to learn it. I have experience using Ubuntu, Kali, Mint, Suse, and of course, Raspbian. I'm not a professional terminal user, but I know the basic commands.";
    changeInformationSkill('skill-others-information', header, info);
});

$('#btn-skill-others-office').on('click', function(){
    activeClassInSkills('btn-skill-others-office', "others");
    const header = "Microsoft Office";
    const info = "I use Microsoft Word, Excel, and Powerpoint. I really can't imagine another program for word processing and slideshow, so I took courses to master them.";
    const items = ["Microsoft Office", "Microsoft Excel", "Microsoft Powerpoint"];
    changeInformationSkill('skill-others-information', header, info, items);
});

$('#btn-skill-languages-persian').on('click', function(){
    activeClassInSkills('btn-skill-languages-persian', "languages");
    const header = "Persian";
    const info = "Persian is my mother tongue.";
    changeInformationSkill('skill-languages-information', header, info);
});

$('#btn-skill-languages-english').on('click', function(){
    activeClassInSkills('btn-skill-languages-english', "languages");
    const header = "English";
    const info = "I consider myself as a professional English speaker.";
    changeInformationSkill('skill-languages-information', header, info);
});

$('#btn-skill-languages-german').on('click', function(){
    activeClassInSkills('btn-skill-languages-german', "languages");
    const header = "German";
    const info = "I consider myself as a professional German speaker.";
    changeInformationSkill('skill-languages-information', header, info);
});

/*************************************
             Animation
*************************************/
$(function() {
    new WOW().init();
});

$(window).on('load', function(){
    $("#home-heading-name").addClass("animated fadeInDown");
    $("#home-heading-title").addClass("animated fadeIn");
    $(".btn-home").addClass("animated fadeInUpBig");
    $(".fa-angle-down").addClass("animated fadeInDown infinite");
});
