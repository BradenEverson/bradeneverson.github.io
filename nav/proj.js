var prevTime = 0;
var currDir = "~";
var curr = "~";

var directories = new Map();
directories.set("~", ["rust", "skillsusa", "eden"])
directories.set("rust", ["unda", "drone", "babel", "bronzeville"])
directories.set("skillsusa", ["state", "nationals", "toaster"])
directories.set("c", ["eden"])

directories.set("unda", ["unda.proj", "unda_assets.png", "README.md"])
directories.set("drone", ["drone.proj", "team.xls", "model.unda", "README.md"])
directories.set("babel", ["babel.proj", "lang.txt", "README.md"])
directories.set("bronzeville", ["brzvl.proj", "firemaps.png", "building_proj.dxf", "README.md"])

directories.set("state", ["state.proj", "FIRST_PLACE.awrd", "fibonacci.h", "README.md"])
directories.set("nationals", ["nationals.proj", "atlanta.xls", "FIFTH_PLACE.awrd", "README.md"])
directories.set("toaster", ["toaster.proj", "IoT.toast", "README.md"])

directories.set("eden", ["eden.proj", "smart_gardens.png", "IoT.h", "TensorFlow.h", "README.md"])



var term = $('body').terminal({
    ls: function () {
        this.echo(directories.get(curr))
    },
    cd: function (dir) {
        let subDir = directories.get(curr);
        if (dir == "../") {
            currDir = "~";
            curr = "~";
        } else if (subDir.includes(dir)) {
            currDir += "/" + dir;
            curr = dir;
        }
        this.echo("Moved to directory: " + currDir)
    },
    pwd: function () {
        this.echo(currDir)
    },
    help: function() {
        this.echo("Welcome to Braden's Projects, here is a simple guide to get you started:\n");
        this.echo($("<p>This page is structured like a simple bash shell, each directory in the root directory is a super-project</p>"));
        this.echo($("<p>Super-projects are either a language that many projects share or some other common distinguisher</p>"));
    }
}, {
    greetings: 'Initializing...'
});
//Init
(async () => {
    await term_out('<p>[ <b class="color-green">Ok</b> ] Setting up projects.</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Creating new project directory.</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Doing other stuff too.</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Creating sutff...</p>')
    await term_out('<p class="left-term-2">Creating rust</p>')
    await term_out('<p class="left-term-4">Creating rust/unda</p>')
    await term_out('<p class="left-term-4">Creating rust/drone-club</p>')
    await term_out('<p class="left-term-4">Creating rust/babel</p>')
    await term_out('<p class="left-term-4">Creating rust/orias</p>')
    await term_out('<p class="left-term-4">Creating rust/bronzeville-gen-ai</p>')

    await term_out('<p class="left-term-2">Creating skillsusa</p>')
    await term_out('<p class="left-term-4">Creating skillsusa/state</p>')
    await term_out('<p class="left-term-4">Creating skillsusa/nationals</p>')
    await term_out('<p class="left-term-4">Creating skillsusa/toaster</p>')

    await term_out('<p class="left-term-2">Creating eden</p>')
    await term_out('<p class="left-term-4">Creating eden/ai</p>')
    await term_out('<p class="left-term-4">Creating eden/hardware</p>')

    await term_out('<p>Begin Asset Load</p>')
    await term_out('<p class="left-term-2">Loading assets [----------] ~0%</p>')
    await term_out('<p class="left-term-2">Loading assets [#---------] ~10%</p>')
    await term_out('<p class="left-term-2">Loading assets [##--------] ~20%</p>')
    await term_out('<p class="left-term-2">Loading assets [###-------] ~30%</p>')
    await term_out('<p class="left-term-2">Loading assets [####------] ~40%</p>')
    await term_out('<p class="left-term-2">Loading assets [#####-----] ~50%</p>')
    await term_out('<p class="left-term-2">Loading assets [######----] ~60%</p>')
    await term_out('<p class="left-term-2">Loading assets [#######---] ~70%</p>')
    await term_out('<p class="left-term-2">Loading assets [########--] ~80%</p>')
    await term_out('<p class="left-term-2">Loading assets [#########-] ~90%</p>')
    await term_out('<p class="left-term-2">Loading assets [##########] 100%</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Load images</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Load resume</p>')
    await term_out('<p>[ <b class="color-green">Ok</b> ] Load passion</p>')

    await term_out('<p>[ <b class="color-red">Err</b> ] Load laziness FAILED</p>')
    await term_out('<p>[ <b class="color-red">Err</b> ] Load ability to quit FAILED</p>')
    await term_out('<p>[ <b class="color-yellow">Warn</b> ] These projects are really cool :)</p>')

    await term_out('<p>welcome to...</p>')
    await term_out('<b class="color-red">________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>')
    await term_out('<b class="color-red">___&nbsp;&nbsp;__&nbsp;)____________&nbsp;______&nbsp;&nbsp;/____________(&nbsp;)_______&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;__&nbsp;\__________________(_)____________&nbsp;&nbsp;/________`</p>')
    await term_out('<b class="color-red">__&nbsp;&nbsp;__&nbsp;&nbsp;|_&nbsp;&nbsp;___/&nbsp;&nbsp;__&nbsp;`/&nbsp;&nbsp;__&nbsp;&nbsp;/_&nbsp;&nbsp;_&nbsp;\_&nbsp;&nbsp;__&nbsp;\|/__&nbsp;&nbsp;___/&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;/_/&nbsp;/_&nbsp;&nbsp;___/&nbsp;&nbsp;__&nbsp;\____&nbsp;&nbsp;/_&nbsp;&nbsp;_&nbsp;\&nbsp;&nbsp;___/&nbsp;&nbsp;__/_&nbsp;&nbsp;___/</b>')
    await term_out('<b class="color-red">_&nbsp;&nbsp;/_/&nbsp;/_&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/_/&nbsp;//&nbsp;/_/&nbsp;/&nbsp;/&nbsp;&nbsp;__/&nbsp;&nbsp;/&nbsp;/&nbsp;/&nbsp;&nbsp;_(__&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;____/_&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/_/&nbsp;/___&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;__/&nbsp;/__&nbsp;/&nbsp;/_&nbsp;_(__&nbsp;&nbsp;)&nbsp;</b>')
    await term_out('<b class="color-red">/_____/&nbsp;/_/&nbsp;&nbsp;&nbsp;&nbsp;\__,_/&nbsp;\__,_/&nbsp;&nbsp;\___//_/&nbsp;/_/&nbsp;&nbsp;&nbsp;/____/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/_/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/_/&nbsp;&nbsp;&nbsp;&nbsp;\____/___&nbsp;&nbsp;/&nbsp;&nbsp;\___/\___/&nbsp;\__/&nbsp;/____/&nbsp;&nbsp;</b>')
    await term_out('<b class="color-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/___/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>')

    await term_out('<b>cd into any project directory or enter <i>help</i> for a list of useful commands</b>')
    await term_out('<b>type <i>projs</i> to get a quick summary of each project</b>')
})();
async function term_out(msg) {
    let waitTime = Math.random() * 70 + 20;
    waitTime += prevTime;
    await setTimeout(() => term.echo($(msg)), waitTime)
    prevTime = waitTime;
}