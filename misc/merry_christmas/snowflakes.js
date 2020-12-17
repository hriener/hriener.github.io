/* SNOW FLAKES
 * Copyright (C) 2020
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
  \file snow_flakes.js
  \brief Falling snow flakes in JavaScript

  A rewrite of `Coding Challenge #88: Snowfall`
  (https://www.youtube.com/watch?v=cl-mHFCGzYk)

  \author Heinz Riener
*/

function get_random_size()
{
    let r = pow( random( 0.5, 1 ), 8 );
    return constrain( 32 * r, 2, 32 )  ;
}

class Snowflake
{
    constructor( x, y )
    {
        this.pos = createVector( x, y );
        this.velocity = createVector( 0, 0 );
        this.acceleration = createVector();
        this.angle = random(TWO_PI);
        this.xoffset = 0;
        this.weight = get_random_size();
    }

    apply_force( force )
    {
        /* parallax effect hack */
        let f = force.copy();
        f.mult( this.weight );
        this.acceleration.add( f );
    }

    randomize()
    {
        let x = random( width );
        let y = random( -100, -10 );
        this.pos = createVector( x, y );
        this.velocity = createVector( 0, 0 );
        this.acceleration = createVector();
        this.weight = get_random_size();
    }

    update()
    {
        this.xoffset = sin( this.angle ) * 2 * this.weight;

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.weight * 0.2 );
        if ( this.velocity.mag() < 1 )
        {
            this.velocity.normalize();
        }
        this.pos.add( this.velocity );
        this.acceleration.mult( 0 );

        if ( this.pos.y > height + this.weight )
        {
            this.randomize();
        }

        /* wrapping left and right */
        if ( this.pos.x < -this.weight )
        {
            this.pos.x = width + this.weight;
        }
        if ( this.pos.x > width + this.weight )
        {
            this.pos.x = -this.weight;
        }
    }

    render()
    {
        /* draw a white circle */
        // stroke( 255 );
        // strokeWeight( this.weight );
        // point( this.pos.x + this.xoffset, this.pos.y );
        this.angle += this.velocity.mag() / 100;

        /* draw an image */
        imageMode( CENTER );
        image( img, this.pos.x, this.pos.y, this.weight, this.weight );
    }

    off_screen()
    {
        return ( this.pos.y > height + this.weight ||
                 this.pos.x < -this.weight ||
                 this.pos.x > width + this.weight );
    }
}

let snow = [];
let gravity;

let zoffset = 0;

function preload()
{
    img = loadImage( "https://hriener.github.io/misc/merry_christmas/snowflake.png" );
}

function setup()
{
    createCanvas( windowWidth - 50, windowHeight - 80 );
    gravity = createVector( 0, 0.3 );
    for ( let i = 0; i < 400; ++i )
    {
        let x = random( width );
        let y = random( height );
        snow.push( new Snowflake( x, y ) );
    }
}

function draw()
{
    background( 0 );
    zoffset += 0.01;

    for ( flake of snow )
    {
        let xOff = flake.pos.x / width;
        let yOff = flake.pos.y / height;
        let wangle = noise( xOff, yOff, zoffset ) * TWO_PI;
        let wind = p5.Vector.fromAngle(wangle);
        wind.mult( 0.2 );

        flake.apply_force( gravity );
        flake.apply_force( wind );
        flake.render();
        flake.update();
    }
}
