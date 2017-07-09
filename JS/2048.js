class Board {
    constructor() {
        this.score = 0;
        this.empty_spots = [];
        this.history = [];
        this.grid = []; // main data structure representation
        for (let i = 0; i < 4; ++i) {
            let row = [];
            for (let j = 0; j < 4; ++j) {
                row.push(0);
                this.empty_spots.push([i, j]);
            }
            this.grid.push(row);
        }
    }

    get_board() {
        return this.grid;
    }

    set(i, j, val) {
        this.grid[i][j] = val;
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
        alert(result);
    }

    /*
     Both functions below are not functional. Contents seem to be linked to each other, causing all
     values in history to be the same
     */
    set_reverse(input) {
        if (this.history.length < 10) { // only add to database
            this.history.push(input);
        } else {
            this.history.shift(); // remove the first element
            this.history.push(input);
        }
    }

    reverse() {
        this.grid = this.history[this.history.length - 1];
//                this.grid = [];
//                for (var i = 0; i < rev.length; i ++){
//                    var temp = [];
//                    for (var j = 0; j < rev[i].length; j ++){
//                        temp.push(rev[i][j]);
//                    }
//                    this.grid.push(temp);
//                }
        this.history.pop();
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

    get_score(){
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
            var temp3 = [];
            for (var l = 0; l < temp2.length - 1; ++l) {
                if (temp2[l] === temp2[l + 1]) {
                    temp3.push(temp2[l] + temp2[l + 1]);
                    this.score += temp2[l] * 2;
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
            this.grid[i] = temp3;
        }
        this.update_empty_spots();
        this.random_generate();
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

            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
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
            for (var x = 0; x < temp2.length; ++x) {
                this.grid[x][i] = temp2[x];
            }
        }
        this.update_empty_spots();
        this.random_generate();
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
            //merging the same # s
            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
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
            this.grid[i] = temp2;
        }
        //update empty spots
        this.update_empty_spots();
        this.random_generate();
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

            var temp2 = [];
            for (var l = 0; l < temp.length - 1; ++l) {
                if (temp[l] === temp[l + 1]) {
                    temp2.push(temp[l] + temp[l + 1]);
                    this.score += temp[l] * 2;
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
            for (var j = 0; j < temp2.length; ++j) {
                this.grid[j][i] = temp2[j];
            }
        }
        this.update_empty_spots();
        this.random_generate();
    }

    game_over() { //algorithm's correct
        if(this.empty_spots.length !== 0){
            return false;
        }
//                alert("no empty spots");
        //vertical check
        for (var k = 0; k < this.grid.length; ++k) {
            for (var i = 1; i < this.grid.length; ++i) {
                if (this.grid[i][k] === this.grid[i - 1][k]){
                    return false;
                }
            }
        }

        //horizontal check
        for (var x = 0; x < this.grid.length; ++x) {
            for (var j = 1; j < this.grid[x].length; ++j) {
                if (this.grid[x][j] === 0){
                    return false;
                }
                if (this.grid[x][j] === board[x][j - 1]){
                    return false;
                }
            }
        }
        return true;
    }
}