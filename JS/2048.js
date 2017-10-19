class PropObserver{
    //mimicking a property observer: only update the game ui when width is changed
    constructor(width){
        this.width = width;
        this.history = width;
    }

    updateHistory(new_width){
        this.history = this.width;
        this.width = new_width;
    }

    shouldWidthUpdate(){
        return this.width !== this.history;
    }
}


class GameEnum {
    // a class that dictates the styling of Game
    constructor() {
        this.restoreDefaults();
    }

    restoreDefaults(){
        //for the main 2048 Board
        this.colWidth = "20%"; // use to be 130px
        this.colSpacing = "1%";
        this.tilePadding = "23% 0"; // used to be 23% 0
        this.tileMarginTop = "-20%";
        this.sectionWidth = "50%";
        this.sectionHeight = "50%";
        this.sectionTop = "3%";
        this.sectionMarginLeft = "25%";
        this.sectionMarginBot = "0%";
        this.gameFontSize = "30px";

        //for the scoreboard
        this.scoreHeight = "20%";
        this.scoreWidth = "30%";
        this.scoreMarginLeft = "-30%";
        this.scoreMarginTop = "-55%";
        this.scoreColor = "beige";

        //for the buttons
        this.buttonLeft = "0";

        //for the high score scoreboard
        this.highScoreFontSize = "30px";
        this.highHeight = "20%";
        this.highWidth = "30%";
        this.highMarginLeft = "104%";
        this.highMarginTop = "-19%";
    }

    //simulating media queries
    adjustStyles() {
        //incorporate jQuery into ReactJS
        let screenWidth = $(window).width();
        if ( screenWidth < 1250 && screenWidth >= 1105) {
            this.tilePadding = "18% 0";
            this.colSpacing = "1.4%";
            this.scoreMarginTop = "-70%";
            this.sectionMarginBot = "25%";
            this.highMarginTop = "-25%";
        } else if (screenWidth < 1105 && screenWidth >= 1000){
            this.sectionWidth = "60%";
            this.sectionMarginLeft = "18.5%";
            this.sectionMarginBot = "25%";
            this.scoreMarginTop = "-60%";
            this.scoreMarginLeft = "-25%";
            this.highMarginTop = "-22%";
            this.highMarginLeft = "97%";
        } else if (screenWidth < 1000 && screenWidth >= 800){
            this.sectionMarginLeft = "14%";
            this.sectionWidth = "70%";
            this.tilePadding = "18% 0";
            this.sectionMarginBot = "27%";
            this.scoreMarginTop = "-60%";
            this.scoreMarginLeft = "-15%";
            this.scoreWidth = "25%";
            this.highWidth = "25%";
            this.highHeight = "25%";
            this.highMarginTop = "-21.8%";
            this.highMarginLeft = "94%";
        } else if (screenWidth < 800 && screenWidth >= 700) {
            this.sectionMarginLeft = "13%";
            this.sectionWidth = "70%";
            this.tilePadding = "18% 0";
            this.sectionMarginBot = "29%";
            this.scoreMarginLeft = "-14%";
            this.scoreMarginTop = "-64%";
            this.scoreWidth = "25%";
            this.highWidth = "25%";
            this.highHeight = "25%";
            this.highMarginTop = "-27%";
            this.highMarginLeft = "93%";
        } else if (screenWidth < 700 && screenWidth > 600){
            this.tilePadding = "18% 0";
            this.sectionMarginBot = "37%";
            this.scoreMarginLeft = "-9%";
            this.scoreMarginTop = "-68%";
            this.scoreWidth = "22%";
            this.gameFontSize = "25px";
            this.sectionWidth = "80%";
            this.sectionMarginLeft = "8.5%";
            this.highWidth = "22%";
            this.highHeight = "25%";
            this.highMarginTop = "-27%";
            this.highMarginLeft = "91%";
        } else if (screenWidth < 600 && screenWidth >= 430) {
            this.tilePadding = "18% 0";
            this.sectionMarginBot = "-10%";
            this.scoreMarginLeft = "20%";
            this.scoreMarginTop = "0";
            this.scoreWidth = "30%";
            this.gameFontSize = "25px";
            this.sectionWidth = "95%";
            this.sectionMarginLeft = "-3%";
            this.colWidth = "22%";
            this.buttonLeft = "10%";
            this.highWidth = "30%";
            this.highHeight = "25%";
            this.highMarginTop = "-27%";
            this.highMarginLeft = "62%";
        } else if (screenWidth >= 376 && screenWidth < 430) {
            this.tilePadding = "15% 0";
            this.sectionMarginBot = "-10%";
            this.scoreMarginLeft = "20%";
            this.scoreMarginTop = "0";
            this.scoreWidth = "30%";
            this.gameFontSize = "20px";
            this.sectionWidth = "95%";
            this.sectionMarginLeft = "-3%";
            this.colWidth = "22%";
            this.buttonLeft = "10%";
            this.highWidth = "30%";
            this.highHeight = "25%";
            this.highMarginTop = "-37%";
            this.highMarginLeft = "62%";
        } else if (screenWidth < 376){
            this.tilePadding = "15% 0";
            this.sectionMarginBot = "-10%";
            this.scoreMarginLeft = "20%";
            this.scoreMarginTop = "0";
            this.scoreWidth = "30%";
            this.gameFontSize = "20px";
            this.sectionWidth = "95%";
            this.sectionMarginLeft = "-3%";
            this.colWidth = "22%";
            this.buttonLeft = "10%";
            this.highWidth = "30%";
            this.highHeight = "25%";
            this.highMarginTop = "-40.3%";
            this.highMarginLeft = "62%";
        } else {
            this.restoreDefaults();
        }
    }
}

/*
 Functions for setting and getting a cookie
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

class Board {
    constructor() {
        this.score_increment = [];
        this.score = 0;
        this.empty_spots = [];
        this.history = [];
        this.prev = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.grid = []; // main data structure representation
        this.high_score = 0;
        for (let i = 0; i < 4; ++i) {
            let row = [];
            for (let j = 0; j < 4; ++j) {
                row.push(0);
                this.empty_spots.push([i, j]);
            }
            this.grid.push(row);
        }
        //create the high-score cookie or obtain the existing cookie
        if (getCookie("high_score") === ""){ // if there's no instance of high score, set it to 0
            setCookie("high_score",this.high_score.toString(),"365");//keep the cookie for a year bro
        } else {
            this.high_score = parseInt( getCookie("high_score"));
        }
    }

    get_board() {
        return this.grid;
    }

    set(i, j, val) {
        this.grid[i][j] = val;
    }

    push_to_scores(sc) {
        if (this.score_increment.length < 10) {
            this.score_increment.push(sc);
        } else {
            this.score_increment.shift();
            this.score_increment.push(sc);
        }
    }

    print_board() {
        var result = "";
        for (var i = 0; i < this.grid.length; i++) {
            for (var j = 0; j < this.grid[i].length; j++) {
                result += this.grid[i][j].toString();
                result += " ";
            }
            result += "\n";
        }
//                alert(result);
        return result;
    }

    print_prev() {
        var result = "";
        for (var i = 0; i < this.prev.length; i++) {
            for (var j = 0; j < this.prev[i].length; j++) {
                result += this.prev[i][j].toString();
                result += " ";
            }
            result += "\n";
        }
        return result;
    }

    /*
     TODO: move_left() and move_right() are not reversing, but the other 2 are functional
     TODO: the history is set to curr for left() and right()
     */
    set_reverse() {
//                this.prev = this.grid.slice(0);
        if (this.history.length < 10) { // only add to database
            this.history.push(this.grid.slice(0));
        } else {
            this.history.shift(); // remove the first element
            this.history.push(this.grid.slice(0));
        }
    }

    reverse() {
//                this.grid = this.prev.slice(0);
        this.grid = this.history[this.history.length - 1].slice(0);
        if (this.history.length > 0) this.history.pop();

        this.score -= this.score_increment[this.score_increment.length - 1];
        if (this.score_increment.length > 0) this.score_increment.pop();
    }

    random_generate() {
        if (this.empty_spots.length !== 0) {
            var random = [2, 4];
            var add_index = Math.floor(Math.random() * random.length);
            var rand_index = Math.floor(Math.random() * this.empty_spots.length);
            //turn that empty spot into 2 or 4, then remove from empty spots
            for (var i = 0; i < this.empty_spots.length; i++) {
                if (i === rand_index) {
                    this.set(this.empty_spots[i][0], this.empty_spots[i][1], random[add_index]);
                    break;
                }
            }
            this.empty_spots.splice(rand_index, 1);//remove from empty spots
        }
    }

    update_empty_spots() {
        this.empty_spots = [];
        for (var i = 0; i < 4; ++i) {
            for (var j = 0; j < 4; ++j) {
                if (this.grid[i][j] === 0) { // meaning they are empty
                    this.empty_spots.push([i, j]);
                }
            }
        }
    }

    get_score() {
        return this.score;
    }

    empty_size() {
        alert(this.empty_spots.length);
    }

    move_down() {
        for (var i = 0; i < this.grid.length; ++i) {
            var temp = [];
            for (var j = 0; j < this.grid[i].length; ++j) {
                if (this.grid[i][j] !== 0) {
                    temp.push(this.grid[i][j]); // add nonzero numbers to temp {2, 4}
                }
            }
            while (temp.length < this.grid.length) {
                temp.unshift(0); //add 0s to temp until size is matched {0, 0, 2, 4}
            }
            //merging the same # s
            var temp2 = temp; // reverse temp
            temp2.reverse();

            let isDuplicating = false;
            if(temp2[2] === temp2[3]) isDuplicating = true;

            var temp3 = [];
            for (var l = 0; l < temp2.length - 1; ++l) {
                if (temp2[l] === temp2[l + 1]) {
                    temp3.push(temp2[l] + temp2[l + 1]);
                    this.score += temp2[l] * 2;
                    this.push_to_scores(temp2[l] * 2);
                    l++;
                } else {
                    temp3.push(temp2[l]);
                }
            }
            //////////////
            var last = temp2[temp2.length - 1];
            if (temp.length === this.grid.length) temp3.push(last);
            //////////////
            while (temp3.length < this.grid.length) {
                temp3.push(0);
            }
            temp3.reverse();
            if(isDuplicating){
                temp3.shift();
                temp3.unshift(0);
            }
            this.grid[i] = temp3;
        }
        this.update_empty_spots();
        this.random_generate();
        if(this.score > this.high_score){
            this.high_score = this.score;
            setCookie("high_score",this.high_score.toString(),"365");
        }
    }

    move_up() {
        for (var i = 0; i < this.grid.length; ++i) {
            var temp = [];
            for (var j = 0; j < this.grid[i].length; ++j) {
                if (this.grid[i][j] !== 0) {
                    temp.push(this.grid[i][j]); // add nonzero numbers to temp {2, 4}
                }
            }
            for (var k = 0; k < this.grid.length - temp.length; ++k) {
                temp.push(0); //add 0s to temp until size is matched {2, 4, 0, 0}
            }

            let isDuplicating = false;
            if(temp[2] === temp[3]) isDuplicating = true;

            //merging the same # s
            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
                    this.push_to_scores(temp[l] * 2);
                    l++;
                } else {
                    temp2.push(temp[l]);
                }
            }
            var last = temp[temp.length - 1];
            if (temp.length === this.grid.length) temp2.push(last);
            while (temp2.length < this.grid.length) {
                temp2.push(0);
            }
            if(isDuplicating){
                temp2.pop();
                temp2.push(0);
            }
            this.grid[i] = temp2;
        }
        //update empty spots
        this.update_empty_spots();
        this.random_generate();
        if(this.score > this.high_score){
            this.high_score = this.score;
            setCookie("high_score",this.high_score.toString(),"365");
        }
    }

    move_left() {
        for (var i = 0; i < this.grid.length; ++i) {
            var vertical = [];
            for (var j = 0; j < this.grid.length; ++j) {  // 0 4 16 32
                vertical.push(this.grid[j][i]);
            }
            var temp = [];
            for (var k = 0; k < vertical.length; ++k) {
                if (vertical[k] !== 0) temp.push(vertical[k]); // 4 16 32
            }
            while (temp.length < this.grid.length) temp.push(0); //4 16 32 0

            let isDuplicating = false;
            if(temp[2] === temp[3]) isDuplicating = true;

            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
                    this.push_to_scores(temp[l] * 2);
                    l++;
                } else {
                    temp2.push(temp[l]);
                }
            }
            //////////////
            var last = temp[temp.length - 1];
            if (temp.length === this.grid.length) temp2.push(last);
            //////////////
            while (temp2.length < this.grid.length) {
                temp2.push(0);
            }

            if(isDuplicating){
                temp2.pop();
                temp2.push(0);
            }
            for (var x = 0; x < temp2.length; ++x) {
                this.grid[x][i] = temp2[x];
            }
        }
        this.update_empty_spots();
        this.random_generate();
        if(this.score > this.high_score){
            this.high_score = this.score;
            setCookie("high_score",this.high_score.toString(),"365");
        }
    }

    move_right() {
        for (var i = 0; i < this.grid.length; ++i) {
            var vertical = [];
            for (var j = 0; j < this.grid.length; ++j) {  // 2 0 2 4
                vertical.push(this.grid[j][i]);
            }
            var vertical2 = [];
            for (var k = 0; k < vertical.length; ++k) {
                if (vertical[k] !== 0) vertical2.push(vertical[k]); // 2 2 4
            }
            while (vertical2.length < this.grid.length) vertical2.unshift(0); // 0 2 2 4 unshift pushes front

            var temp = vertical2;//reverse of vertical 2
            temp.reverse();

            let isDuplicating = false;
            if(temp[2] === temp[3]) isDuplicating = true;

            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
                    this.push_to_scores(temp[l] * 2);
                    l++;
                } else {
                    temp2.push(temp[l]);
                }
            }
            //////////////
            var last = temp[temp.length - 1];
            if (temp.length === this.grid.length) temp2.push(last);
            //////////////
            while (temp2.length < this.grid.length) temp2.push(0);
            temp2.reverse();
            if(isDuplicating){
                temp2.shift();
                temp2.unshift(0);
            }
            for (var z = 0; z < temp2.length; ++z) {
                this.grid[z][i] = temp2[z];
            }
        }
        this.update_empty_spots();
        this.random_generate();
        if(this.score > this.high_score){
            this.high_score = this.score;
            setCookie("high_score",this.high_score.toString(),"365");
        }
    }

    game_over() { //algorithm's correct
        if (this.empty_spots.length !== 0) {
            return false;
        }
        //vertical check
        for (var k = 0; k < this.grid.length; ++k) {
            for (var i = 1; i < this.grid.length; ++i) {
                if (this.grid[i][k] === this.grid[i - 1][k]) {
                    return false;
                }
            }
        }

        //horizontal check
        for (var x = 0; x < this.grid.length; ++x) {
            for (var j = 1; j < this.grid[x].length; ++j) {
                if (this.grid[x][j] === 0) {
                    return false;
                }
                if (this.grid[x][j] === board[x][j - 1]) {
                    return false;
                }
            }
        }
        return true;
    }
}


/*
 determine what color should the tile be based on the value of the tile itself
 */
function determine_color(num) {
    if (num === 0) {
        return "beige";
    } else if (num === 2) {
        return "beige";
    } else if (num === 4) {
        return "yellow";
    } else if (num === 8) {
        return "#f4b042";
    } else if (num === 16) {
        return "#f48641";
    } else if (num === 32) {
        return "#f45241";
    } else if (num === 64) {
        return "#ff1800";
    } else if (num === 128) {
        return "#ff00b2";
    } else {
        return "black";
    }
}

function font_color(num) {
    if (num === 0) {
        return "beige";
    } else if (num < 8) {
        return "black";
    } else {
        return "white";
    }
}

var grid = new Board();
var gameStyles = new GameEnum();
gameStyles.adjustStyles();
let globalWidth = $(window).width();
var observer = new PropObserver(globalWidth);
var parent; // defined the scope of Game inside constructor of Game

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.rand_gen = this.rand_gen.bind(this);
        this.left = this.left.bind(this);
        this.up = this.up.bind(this);
        this.right = this.right.bind(this);
        this.down = this.down.bind(this);
        this.reverse_game = this.reverse_game.bind(this);
        parent = this; // correct scope issues
        // have 16 different states, each representing a tile in the 2048 game
        this.state = {
            tile1: 0, tile2: 0, tile3: 0, tile4: 0,
            tile5: 0, tile6: 0, tile7: 0, tile8: 0,
            tile9: 0, tile10: 0, tile11: 0, tile12: 0,
            tile13: 0, tile14: 0, tile15: 0, tile16: 0,
            scores: 0, hist_num: 0
        };
    }

    /*
     Function that takes in a board and updates the values of each tile
     */
    update(board) {
        globalWidth = $(window).width();
        observer.updateHistory(globalWidth);
        if (observer.shouldWidthUpdate()){
            gameStyles.adjustStyles();
        }
        this.setState({tile1: board[0][0]});
        this.setState({tile2: board[0][1]});
        this.setState({tile3: board[0][2]});
        this.setState({tile4: board[0][3]});
        this.setState({tile5: board[1][0]});
        this.setState({tile6: board[1][1]});
        this.setState({tile7: board[1][2]});
        this.setState({tile8: board[1][3]});
        this.setState({tile9: board[2][0]});
        this.setState({tile10: board[2][1]});
        this.setState({tile11: board[2][2]});
        this.setState({tile12: board[2][3]});
        this.setState({tile13: board[3][0]});
        this.setState({tile14: board[3][1]});
        this.setState({tile15: board[3][2]});
        this.setState({tile16: board[3][3]});
        this.setState({scores: grid.get_score()});
        this.setState({hist_num: grid.history.length});
    }

    rand_gen() {
        grid.set_reverse();
        grid.random_generate();
        this.update(grid.get_board());
        if (grid.game_over()) {
            alert("GAME OVER. PLEASE RELOAD THIS PAGE TO RESTART");
        }
    }

    up() {
        grid.set_reverse();
        grid.move_up();
        this.update(grid.get_board());
        if (grid.game_over()) {
            alert("GAME OVER. PLEASE RELOAD THIS PAGE TO RESTART");
        }
    }

    down() {
        grid.set_reverse();
        grid.move_down();
        this.update(grid.get_board());
        if (grid.game_over()) {
            alert("GAME OVER. PLEASE RELOAD THIS PAGE TO RESTART");
        }
    }

    left() {
        grid.set_reverse();
        grid.move_left();
        this.update(grid.get_board());
        if (grid.game_over()) {
            alert("GAME OVER. PLEASE RELOAD THIS PAGE TO RESTART");
        }
    }

    right() {
        grid.set_reverse();
        grid.move_right();
        this.update(grid.get_board());
        if (grid.game_over()) {
            alert("GAME OVER. PLEASE RELOAD THIS PAGE TO RESTART");
        }
    }

    reverse_game() {
        grid.reverse();
        this.update(grid.get_board());
    }

    /*
     * React JS LifeCycle Methods: Called before Render
     * Only called before the component is rendered for the 1st time
     */
    componentWillMount(){
        this.rand_gen(); // start the game with one tile
    }

    /*
     * React JS LifeCycle Methods: Called After Render
     * This function enables keyboard input to interact w/ the game
     */
    componentDidMount(){
        //disable scrolling with arrow keys
        window.addEventListener("keydown", function(e) {
            // space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);

        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 37) { // left arrow
                parent.left();
            } else if (event.keyCode === 39) { // right arrow
                parent.right();
            } else if (event.keyCode === 38){ // up arrow
                parent.up();
            } else if (event.keyCode === 40){ // down arrow
                parent.down();
            } else if (event.keyCode === 82){ // R key
                parent.rand_gen();
            }
        }, true);
    }

    render() {
        //returns a 4 by 4 grid containing the 2048 grid
        return (
            <div style={{
                width: gameStyles.sectionWidth,
                height: gameStyles.sectionHeight,
                marginLeft: gameStyles.sectionMarginLeft,
                marginBottom: gameStyles.sectionMarginBot
            }}>
                <div style={{display: "flex", fontSize: gameStyles.gameFontSize, margin: "0 0 0 14%"}}>
                    <div style={{width: gameStyles.colWidth, margin: gameStyles.colSpacing}}>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile1),
                            color: font_color(this.state.tile1),
                            padding: gameStyles.tilePadding
                        }}>{this.state.tile1}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile2),
                            padding: gameStyles.tilePadding,
                            color: font_color(this.state.tile2),
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile2}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile3),
                            padding: gameStyles.tilePadding,
                            color: font_color(this.state.tile3),
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile3}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile4),
                            padding: gameStyles.tilePadding,
                            color: font_color(this.state.tile4),
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile4}</h1>
                    </div>

                    <div style={{width: gameStyles.colWidth, margin: gameStyles.colSpacing}}>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile5),
                            color: font_color(this.state.tile5),
                            padding: gameStyles.tilePadding
                        }}>{this.state.tile5}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile6),
                            color: font_color(this.state.tile6),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile6}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile7),
                            color: font_color(this.state.tile7),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile7}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile8),
                            color: font_color(this.state.tile8),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile8}</h1>
                    </div>

                    <div style={{width: gameStyles.colWidth, margin: gameStyles.colSpacing}}>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile9),
                            color: font_color(this.state.tile9),
                            padding: gameStyles.tilePadding
                        }}>{this.state.tile9}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile10),
                            color: font_color(this.state.tile10),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile10}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile11),
                            padding: gameStyles.tilePadding,
                            color: font_color(this.state.tile11),
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile11}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile12),
                            color: font_color(this.state.tile12),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile12}</h1>
                    </div>

                    <div style={{width: gameStyles.colWidth, margin: gameStyles.colSpacing}}>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile13),
                            color: font_color(this.state.tile13),
                            padding: gameStyles.tilePadding
                        }}>{this.state.tile13}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile14),
                            color: font_color(this.state.tile14),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile14}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile15),
                            color: font_color(this.state.tile15),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile15}</h1>
                        <h1 style={{
                            align: "center",
                            background: determine_color(this.state.tile16),
                            color: font_color(this.state.tile16),
                            padding: gameStyles.tilePadding,
                            marginTop: gameStyles.tileMarginTop
                        }}>{this.state.tile16}</h1>
                    </div>
                </div>
                {/*<h1 style={{textAlign: "center", marginTop: "-5%"}}> {grid.print_prev()}</h1>*/}
                <div style={{marginTop: "-2%", marginLeft: gameStyles.buttonLeft}}>
                    {/*<button onClick={this.reverse_game}>Reverse</button>*/}
                    <button onClick={this.rand_gen}>Random Generate</button>
                    <button onClick={this.up}>Move up</button>
                    <button onClick={this.left}>Move left</button>
                    <button onClick={this.right}>Move Right</button>
                    <button onClick={this.down}>Move Down</button>
                </div>
                <div style={{
                    height: gameStyles.scoreHeight, width: gameStyles.scoreWidth,
                    background: gameStyles.scoreColor, marginLeft: gameStyles.scoreMarginLeft,
                    marginTop: gameStyles.scoreMarginTop, zIndex: "3"
                }}>
                    <h1 style={{paddingTop: "5%"}}>Score</h1>
                    <h1>{this.state.scores}</h1>
                </div>
                <div style={{
                    height:gameStyles.highHeight, width:gameStyles.highWidth,
                    background:"beige", marginLeft:gameStyles.highMarginLeft,
                    marginTop: gameStyles.highMarginTop, zIndex:"3"
                }}>
                    <h1 style={{paddingTop: "5%"}}>Best</h1>
                    <h1>{grid.high_score}</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('game')
);