
var canvas = document.getElementById("grid-canvas");
var rect2 = canvas.getBoundingClientRect(), // abs. size of element
scaleX = canvas.width / rect2.width,    // relationship bitmap vs. element for X
scaleY = canvas.height / rect2.height;  // relationship bitmap vs. element for Y
var grid_size = 30*scaleX;
var x_axis_distance_grid_lines = 10;
var y_axis_distance_grid_lines = 3;
var x_axis_starting_point = { number: 1, suffix: '\u03a0' };
var y_axis_starting_point = { number: 1, suffix: '' };

var ctx = canvas.getContext("2d");

var canvas_width = rect2.width;
var canvas_height = rect2.height;

var num_lines_x = Math.floor(canvas_height/grid_size)-2;
var num_lines_y = Math.floor(canvas_width/grid_size);

ctx.font = 'bold 18px Arial';
ctx.fillText("log(Protection Factor)", 200, 350);

// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 2.0;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i == num_lines_x) {
        ctx.moveTo(30, grid_size*i);
        ctx.lineTo(canvas_width-40, grid_size*i);
    }
    else {
        ctx.moveTo(30, grid_size*i+0.5);
        ctx.lineTo(canvas_width-40, grid_size*i+0.5);
    }
    ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=1; i<=num_lines_y-1; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i == num_lines_y) {
        ctx.moveTo(grid_size*i, 0);
        ctx.lineTo(grid_size*i, canvas_height-60);
    }
    else {
        ctx.moveTo(grid_size*i+0.5, 0);
        ctx.lineTo(grid_size*i+0.5, canvas_height-60);
    }
    ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=0; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'start';
    if(x_axis_starting_point.number*i <10)
        ctx.fillText(x_axis_starting_point.number*i, grid_size*i-4/scaleY, 20/scaleY);
    else
        ctx.fillText(x_axis_starting_point.number*i, grid_size*i-7/scaleY, 20/scaleY);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i, -grid_size*i+4/scaleY, 20/scaleY);
}


// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<x_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    //ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
}

