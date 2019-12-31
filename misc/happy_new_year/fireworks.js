/* HAPPY NEW YEAR
 * Copyright (C) 2019
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*!
  \file fireworks.js
  \brief Happy New Year in JavaScript

  \author Heinz Riener
*/


/*! \brief Returns a random number in [a,b] (including boundaries a and b) */
function rand( a, b )
{
    return Math.floor( ( Math.random() * ( b + 1 ) ) + a );
}

/*! \brief Draw a primitive at x and y in RGB color col */
function primitive( x, y, size, col )
{
    context.beginPath();
    context.fillStyle = 'rgba(' + col.red + ',' + col.green + ',' + col.blue + ',' + col.alpha + ')';
    context.arc( x, y, Math.max(1, size), 0, 2*Math.PI );
    context.fill();
}

/*! \brief Sleep for some ms milliseconds */
function sleep( ms )
{
  const date = Date.now();
  let currentDate = null;
  do
  {
    current_date = Date.now();
  }
  while (current_date - date < ms);
}

/* define some colors */
let colors = [
    {red:255, green:0, blue:0, alpha:1}, /* red */
    {red:0, green:255, blue:0, alpha:1}, /* green */
    {red:0, green:0, blue:255, alpha:1}, /* blue */
    {red:255, green:255, blue:255, alpha:1}, /* white */
    {red:255, green:255, blue:0, alpha:1}, /* yellow */
    {red:255, green:0, blue:255, alpha:1} /* margenta */
]

/* define some constants to manipulate the fireworks */
const max_fireworks = 5;
const max_sparks_while_alive = 20;
const max_sparks = 15;

/* get access to the drawing board in the HTML document */
let canvas = document.getElementById('drawing board');
let context = canvas.getContext('2d');

/* populate fireworks array with objects */
let fireworks = [];

for ( let i = 0; i < max_fireworks; ++i )
{
    let firework = {
        sparks: [],
        x: rand( 0, canvas.width ),
        y: canvas.height,
        decoy: 0,
        state: 'alive',
        color: colors[rand( 0, colors.length-1 )]
    };

    /* populate each firework with sparks */
    for ( let j = 0; j < max_sparks; ++j )
    {
        let spark = {
            vx: Math.random() * 5 + .5,
            vy: Math.random() * 5 + .5,
            weight: Math.random() * .3 + .03,
            length: rand( 1, 25 )
        }
        if ( Math.random() > .5 )
            spark.vx = -spark.vx;
        if ( Math.random() > .5 )
            spark.vy = -spark.vy;
        firework.sparks.push( spark );
    }

    fireworks.push( firework );
}

function animate_fireworks()
{
    /* clear canvas */
    context.clearRect( 0, 0, canvas.width, canvas.height );

    /* slow down animation if necessary */
    // sleep( 35 );

    fireworks.forEach( ( firework, index ) => {
        if ( firework.state == 'explode' )
        {
            /* reset firework */
            if ( firework.decoy > 30 && Math.random() < .05 )
            {
                firework.x = rand( 0, canvas.width );
                firework.y = canvas.height;
                firework.decoy = 0;
                firework.state = 'alive';
                firework.color = colors[rand( 0, colors.length-1 )];
            }
            else
            {
              firework.sparks.forEach( (spark) => {
                  for ( let i = 0; i < spark.length; ++i )
                  {
                      let current_decoy = firework.decoy + i;
                      let x = firework.x + spark.vx * current_decoy;
                      let y = firework.y + spark.vy * current_decoy + spark.weight * current_decoy * spark.weight * current_decoy;
                      let col = firework.color;
                      primitive( x, y, 3, {red:col.red,green:col.green,blue:col.blue,alpha:1-i/(spark.length*7)*firework.decoy} );
                  }
              } );
              ++firework.decoy;
            }
        }
        else // ( firework.state == 'alive' )
        {
            /* fly upwards */
            firework.y = firework.y - 10;

            /* draw object with the first few sparks */
            for ( let spark = 0; spark < Math.min( max_sparks_while_alive, max_sparks ); ++spark )
            {
                primitive( firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4 - spark/2, firework.color );
            }

            /* eventually decide to explode */
            if ( Math.random() < .001 || firework.y < 200 )
            {
                firework.state = 'explode';
            }
        }
    } );

    /* keep animating */
    window.requestAnimationFrame( animate_fireworks );
}

/* start animation */
window.requestAnimationFrame( animate_fireworks );
