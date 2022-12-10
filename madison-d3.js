if (!(top.document === document)) {
    handleUserEvent = function() {
        top.$(top.document).trigger('keydown.idleTimer');
    }
    var events = 'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove'; // activity is one of these events
    $(document).bind($.trim((events + ' ').split(' ').join('.idleTimer ')), handleUserEvent);
}
// Global vars
var w = 960,
    h = 628,
    z = 90,
    circle_radius = z / 2,
    x = w / z,
    y = h / z,
    stroke_width = 5,
    background_width = 900,
    background_height = 500,
    background_x = (w - background_width) / 2,
    background_y = (h - background_height) / 2,
    enlarged_position_x = background_width / 4 + background_x,
    enlarged_position_y = h / 2.1,
    source_x = 70,
    source_y = 513,
    text_x = 466,
    text_y = 164,
    text_line_offset = 30,
    text_font_size = "30px",
    text_delay_time = 250,
    text_fade_in_time = 550,
    image_min_hw = 110,
    image_max_hw = 90,
    clip_minimized_xy = image_min_hw / 2,
    clip_maximized_xy = image_max_hw / 2,
    transition_time = 750,
    related_starting_x = 785,
    related_starting_y = 115,
    related_x_offset = circle_radius * 2 + 30;
var circleData = [{
    "id": 1,
    "cx": .72 * w,
    "cy": .3 * h,
    "image": "hiv-jail-treatment.jpg",
    "related": [2, 5,10],
    "theme": "hiv-carceral",
    "text": ['<b>HIV/AIDs in the Carceral State</b>', '<font size="2">Description here</font>'],
    "source": 'Photo Credit: NICOLE BENGIVENO / <em>The New York Times</em>. A mural painted by children living at the Little Earth of United Tribes housing complex in Minneapolis, a site of many incidents of police brutality against Natives over the past two decades.'
}, {
    "id": 2,
    "cx": .165 * w,
    "cy": .19 * h,
    "image": "prison_walls.jpg",
    "related": [1, 4,8,3],
    "theme": "prison",
    "text": ['<b>Inside Prison Walls</b>', '<font size="3">Congress passed RLUPIA in 2000 to amend the Religious Freedom Restoration act of 1993. RLUPIA states that the government cannot restrict religious freedom rights of of incarcerated persons unless there is a â€œcompelling government interestâ€ that can only be met by the restriction of those rights. The use of peyote in prison is one example of Native practice that continues to be denied to many incarcerated persons as it is classified as a Schedule 1 drug along with LSD and heroin. How might corrections officials need to evolve in the future to better support the rights and needs of indigenous persons?</font>'],
    "source": 'Photo taken from Toyacoyah Brown\â€™s December 18, 2014 article, Pow Wow Allows Inmates to Reconnect with Their Roots at http://www.powwows.com/2014/12/18/pow-wow-allows-inmates-to-reconnect-with-their-roots/'
}, {
    "id": 3,
    "cx": .60 * w,
    "cy": .64 * h,
    "image": "care.jpg",
    "related": [2, 10],
    "theme": "care",
    "text": ['<b>(Lack of) Medical Care</b>', '<font size="2">The Wounded Knee incident of 1973 was a 71 day standoff between AIM activists and their supporters from the Pine Ridge Reservation and Federal law enforcement agencies. The standoff began following a dispute over tribal governance and quickly escalated into a symbolic protest of the US Governmentâ€™s abuse of Native communities. On February 27, 1973 armed AIM activists and their Oglala Lakota Sioux allies seized the town of Wounded Knee, South Dakota. Law enforcement agencies quickly laid siege to the town, beginning the standoff. In the following months two Native American activists were killed and the siege eventually ended. Following the incident the FBI and reservation authorities unleashed a massive, violent crackdown on AIM activists. As in many earlier actions, Native Americans at Wounded Knee used the tactic of occupying space to protest government action and to bring awareness to their struggle. Unlike earlier instances, however, the occupation was an armed struggle. Was this type of armed action justified? </font>'],
    "source": 'Image posted on a Blog: <a href=https://dreyfubk1.wordpress.com/>'
}, {
    "id": 4,
    "cx": .0072 * w,
    "cy": .664 * h,
    "image": "testing.jpg",
    "related": [2, 3],
    "theme": "testing",
    "text": ['<b>Forced Testing</b>', '<font size="2"><em>One Flew Over the Cuckooâ€™s Nest</em> is a novel written by Ken Kesey published in 1962 and is set in a psychiatric hospital. His novel is narrated by a Native American man, Chief Bromden, who in the novelâ€™s conclusion strangles another prisoner, Randle McMurphy after McMurphy receives a lobotomy and ends up in a vegetative state. Rather than let Nurse Ratched, the head nurse, use McMurphy as a threat toward other patients considering resistance, the Chief puts McMurphy out of his misery. The Chief follows this up by smashing through the hospitalâ€™s window and escaping. Adapted into both a play and an Academy Award movie, this image of the Chief breaking out of the hospital is one of the most prominent visions of a Native American challenging his or her own imprisonment. Why are scenes like this in books and movies so important? In what ways is this depiction of Bromden still problematic?</font>'],
    "source": 'The Chief breaking out of the psychiatric hospital in the film adaptation of <em>One Flew Over the Cuckoo\'s Nest</em>. Click <a href=https://www.youtube.com/watch?v=I3c2cXiEUHo> here</a> to see a clip of Chief Bromden escaping the hospital. The screencap is taken from <a href=http://www.filmsufi.com/2013/03/one-flew-over-cuckoos-nest-milos.html> Film Sufi</a>.'
}, {
    "id": 5,
    "cx": .43 * w,
    "cy": .19 * h,
    "image": "outside-prison.jpg",
    "related": [4,1],
    "theme": "outside-prison",
    "text": ['<b>Outside Prison Walls</b>', '<font size="3">In addition to access to facilities and sacred objects, Native Americans also require access to medicine men and spiritual leaders. Depending on the prison and the level of the offender, qualified resource volunteers are needed to facilitate practices on behalf on an individual or groups. One resource volunteer described the motivation for his work, "Why I like to go into the prisons is because that is the time they get to be Indian." Finding qualified volunteers can be problematic, and indigenous practices vary widely. The Native American Church is perhaps the most widely known and involved organization in the religious lives of incarcerated indigenous persons, but it does not cover all practices.</font>'],
    "source": 'Photo taken from Adron Garner/â€™s article, â€œSweat Lodge Gives Imprisoned Native Women Moments of Spiritual Freedomâ€ at \http://navajotimes.com/ae/community/sweat-lodge-gives-imprisoned-native-women-moments-spiritual-freedom/'
}, {
    "id": 8,
    "cx": .05 * w,
    "cy": .157 * h,
    "image": "surveillance.jpg",
    "related": [2,9,5],
    "theme": "surveillance",
    "text": ['<b>Surveillance</b>', '<font size="3">Boarding Schools have played an especially damaging role in the constraint of Native Americans. Many Native American parents were coerced into sending their children to distant boarding schools. Children were frequently kept in the schools against their wishes, or the wishes of their parents, and students were often victimized by harsh punishments, sexual abuse, and systematic attempts to denigrate and destroy their native culture. Native American resistance to Boarding Schools took many forms. Many children disobeyed school authorities, for instance by continuing to speak their own languages. Many children ran way from the schools and many parents actively resisted the pressures to send their children to the schools.</font>'],
    "source": "Wikipedia"
}, {
    "id": 9,
    "cx": .241 * w,
    "cy": .359 * h,
    "image": "civil-punishment.jpg",
    "related": [8],
    "theme": "punishment",
    "text": ['<b>Civil Punishment</b>', '<font size="3">In 1974, the United States District Court for the District of Nebraska ordered that the Nebraska State Penitentiary must, â€œallow inmates access to Indian medicine men and spiritual leaders and provide facilities for spiritual and religious services.â€ In 1976, a supplemental consent decree from the same court ordered that a sweat lodge be made available for Indian inmate worship. The Nebraska lodge built in the Menâ€™s Reformatory Unit in Lincoln, NE became the first sweat lodge constructed on prison grounds in the United States. Prior to 1974 (and even since), prison officials have expressed safety concerns when considering accommodating indigenous religious practices in corrections facilities, and the Supreme Court has at times considered the First Amendment rights of prisoners as subordinate to the needs of corrections officials to control the prison environment.</font>'],
    "source": "Consent Decree, Indian Inmates of the Nebraska Penitentiary v. Joseph Vitek (No. 4:72-CV-00156-WKU, July 27, 1974), available as document no. PC-NE-0002-0001, at http://clearinghouse.net"
}, {
    "id": 10,
    "cx": .57 * w,
    "cy": .36 * h,
    "image": "threat.jpg",
    "related": [9, 1,2,3,11],
    "theme": "threat",
    "text": ['<b>Perceptions of Threat</b>', '<font size="3">The American Indian Movement (AIM) was founded in 1968 in Minneapolis, Minnesota. AIM members have taken part in numerous acts of resistance to the systematic injustices affecting Native American communities. Many of these actionsâ€”like the Trail of Broken Treatiesâ€”have been peaceful, but someâ€”including the Pine Ridge incidentâ€”have become violent confrontations with law enforcement. In this context, AIM straddles the divide between the non-violent protests of the Civil Rights Movement and the militant activism of groups like the Black Panther Party. Do you think that one of these strategies is more effective than the other?</font>'],
    "source": 'Public domain through Wikipedia'
}, {
    "id": 11,
    "cx": .311 * w,
    "cy": .63 * h,
    "image": "criminalization.jpg",
    "related": [10],
    "theme": "criminalization",
    "text": ['<b>Criminalization</b>', '<font size="3">Journalist Chris Hedges and cartoonist and journalist Joe Sacco visited the Pine Ridge Reservation for a chapter in <em>Days of Destruction, Days of Revolt</em>, a graphic novel highlighting what Hedges calls, "sacrifice zones, those areas in the country that have been offered up for exploitation in the name of profit, progress and technological advancement." At Pine Ridge they meet Michael Red Cloud, descendant of Chief Red Cloud. Michael describes his experience in a sweat lodge while incarcerated: "They can take away your freedom. They can take away everything in your life. But they can\'t take away this relationship from your heart to your mind. And that\'s where spirituality exists.â€ When you read this quote, what impact does it have on your understanding of the connection of religious practice to rehabilitation? </font>'],
    "source": 'From Days of Destruction, Days of Revolt, Joe Sacco\â€™s drawing of Michael Red Cloud\â€™s sweat lodge experience.'
}];
var additional_image_data = {
    4: {
        "images": ["PLAY.png"],
        "media": "video",
        "mediatitle": "CUCKOO",
        "positions": [{
            "x": 72,
            "y": 78
        }]
    }
};
// Base canvas
var svg = d3.select("main").append("svg").attr("width", w).attr("height", h);
// This clip will be used for showing the image in the circle
var clip = svg.append("defs").append("svg:clipPath").attr("id", "clip").append("svg:circle").attr("id", "circleclip").attr("cx", clip_minimized_xy).attr("cy", clip_minimized_xy).attr("r", circle_radius - 1.5);
// This clip will be used for showing the image in the "full" view
var full_clip = svg.append("defs").append("svg:clipPath").attr("id", "full_clip").append("svg:circle").attr("id", "fullcircleclip").attr("cx", clip_minimized_xy).attr("cy", clip_minimized_xy).attr("r", circle_radius - .50);
// This clip is a temporary clip that is used when moving related circles into the enlarged circle
var related_clip = svg.append("defs").append("svg:clipPath").attr("id", "related_clip").append("svg:circle").attr("id", "relatedclip").attr("cx", clip_minimized_xy).attr("cy", clip_minimized_xy).attr("r", circle_radius - .50);


// This is the background
// Give it some texture with a slight gradient
var gradient = svg.append("defs")
  .append("radialGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#232323")
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#000")
    .attr("stop-opacity", 1);

svg.append("rect").attr("fill", "url(#gradient)").attr("width", w).attr("height", h).style("stroke-width", 0).style("stroke", "black");
// Create the g nodes and add the circles to them
circle_groups = svg.selectAll("g").data(circleData).enter().append("g").on("click", enlarge).attr({
    "transform": translate,
    "class": function(d) {
        return "datapoint" + d.id;
    }
}).classed('mousefinger', true).classed('circle', true)
circle_groups.append("circle").attr({
    "r": function(d) {
        return circle_radius;
    },
    "fill": "black",
    "stroke": "gray",
    "stroke-width": 3
});
// Add the images to the <g> nodes
circle_groups.append("image").attr({
    "xlink:href": function(d) {
        return 'images/' + d.image
    },
    "width": image_min_hw,
    "height": image_min_hw,
    "clip-path": "url(#clip)",
    "transform": "translate(-" + image_min_hw / 2 + ", -" + image_min_hw / 2 + ")"
});
// Create a dimmer to dim the background elements
svg.append("rect").classed("dimmer", true).attr("fill", "black").attr("fill-opacity", 0.0).attr("width", 0).attr("height", 0);
// create the rect background for the enlarged view
svg.append('rect').classed("background", true).attr("fill", "white").attr("width", 0).attr("height", 0).attr("x", 0).attr("y", 0).style({
    "stroke": "black",
    "stroke-width": 1
});
about_group = svg.append('g').attr({
    'transform': 'translate(55, 55)',
    "class": 'about'
}).classed('mousefinger', true).on("click", load_about)
about_group.append("circle").attr({
    "r": function(d) {
        return circle_radius;
    },
    "fill": "#f2f2f2",
    "stroke": "gray",
    "stroke-width": 3
});
about_group.append('text').attr("x", -37).attr("y", 7).text("About").attr("font-family", "garamond").attr("font-size", "29px").attr("fill", "black");
about_group = svg.append('g').attr({
    'transform': 'translate(155, 55)',
    "class": 'about'
}).classed('mousefinger', true).on("click", function() {
    load_about("media");
})


function load_about(theme) {
    theme = theme || null;
    // Create about prompt
    about_prompt_group = svg.append("g").attr({
        "transform": "translate(12.5,36.5)",
        "opacity": 0
    }).classed("prompt", true).on('click', close_about_prompt)
    about_prompt_group.append("rect").attr({
        "fill": "black",
        "width": 2000,
        "height": 2000,
        "opacity": 0.6,
        "transform": "translate(-500, -500)"
    }).style({
        "stroke-width": "0px",
    })
    about_prompt_group.append("rect").attr({
        "fill": "white",
        "width": 933,
        "height": 550,
    }).style({
        "stroke-width": "1px",
        "stroke": "black"
    })
    about_prompt_group.append("image").attr({
        "xlink:href": 'images/PATCH CROP.jpg',
        "width": 350,
        "height": 480,
        "opacity": 0.95,
        "transform": "translate(290, 85)"
    });
    about_prompt_group.append("foreignObject").attr({
        "width": 880,
        "height": 542,
        "x": 28,
        "y": 7,
        "requiredFeatures": "http://www.w3.org/TR/SVG11/feature#Extensibility"
    }).append("xhtml:body").html(function() {
        return get_about_prompt_text();
    });
    about_prompt_group.transition().duration(transition_time).attr({
            "opacity": 1
        })
        // Fade in a close button in the about prompt
    close_button_about_group = svg.append("g").attr({
        "opacity": 0,
        "transform": "translate(900, 25)"
    }).on('click', close_about_prompt)
    close_button_about_group.classed("closeButton", true)
    close_button_about_group.classed("mousefinger", true)
    close_buton = close_button_about_group.append("image").attr({
        "xlink:href": 'images/close-button.png',
        "width": 50,
        "height": 50
    });
    close_button_about_group.transition().duration(transition_time).attr({
        "opacity": 1
    })
}

function get_about_prompt_text() {
    html = "";
    html += '<div style="font-size: 1.4em"><b>About</b></div><hr>';
    html += '<div>Sites of Resistance investigates a part of American Indian history that is often glossed over in K-12 history books. The history of the United States is a history that is intrisincally embedded in a story of colonialism, war, genocide, and exploitation. We cannot talk about the United States without acknowledging that the very presence of this nation is predicated on the colonization, removal, and forced assimilation of native peoples and their cultures. We do not claim this to be a complete history of American Indians. Rather, by showing a fragment of this story through a lens of resistance, our goal is to convey how incomplete and invisible American Indian history is in the mainstream. We share some facets of this story, while posing questions that are meant to challenge our understanding of sovereignty, citizenship, nationhood, and freedom, and compel you, the reader, to seek more. </div><br>';
    html += '<div style="margin-top:302px;">Research and content for this project by Michelle â€œChipâ€ Chang, Michael Kudow, Ingrid Nuttall, and Alex Steele. Site design by Evan Taparata and Ryan Andersen. Special thanks to Kevin Murphy for his guidance and inspiration, to the creators of the Orange Jumpsuits project which served as the inspiration for the design of this site, and to Evan Taparata for his patience and commitment.</div>';
    return html;
}


function close_prompt() {
    close_prompt_group.transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        close_prompt_group.remove();
    })
    close_button_promt_group.transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        close_button_promt_group.remove();
    })
}

function close_about_prompt() {
    about_prompt_group.transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        about_prompt_group.remove();
    })
    close_button_about_group.transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        close_button_about_group.remove();
    })
}
// Returns the "translate(x,y)" based on the elements specific location in the data
// This is used to draw the circles in their origin
function translate(d) {
    return "translate(" + (d.cx + (circle_radius) + stroke_width) + "," + (d.cy + (circle_radius) + stroke_width) + ")";
}

function get_enlarged_transformation(d) {
    if (typeof additional_image_data[d.id] === 'undefined') {
        return "translate(" + enlarged_position_x + ", " + enlarged_position_y + ")scale(4.4)"
    } else {
        return "translate(" + enlarged_position_x + ", " + (enlarged_position_y + 38) + ")scale(3.6)"
    }
}
// This function handles clicking on a circle while in the main view.
function enlarge(d) {
    data = d;
    // Create a dimmer to dim the background elements
    d3.select(".dimmer").each(function() {
        bringToFront(this);
    }).attr('width', w).attr('height', h).on('click', reset).transition().duration(transition_time).attr("fill-opacity", 0.75);
    // Create a background to show the details over
    d3.select(".background").each(function() {
        bringToFront(this);
    }).attr("x", d.cx + circle_radius).attr("y", d.cy + circle_radius).transition().duration(transition_time).attr("width", background_width).attr("height", background_height).attr("x", background_x).attr("y", background_y);
    // position the images (orignial and related)
    // Make sure it is placed above everything
    bringToFront(this);
    d3.select(this).each(function() {
            bringToFront(this);
        }).classed("enlarged", true).classed('mousefinger', false).on('click', "").transition().duration(transition_time).attr("transform", get_enlarged_transformation).select('circle').attr("stroke-width", 1).each("end", function(d) {
            // Once the frame is done loading, then load the text and the additioanl images
            // Get the related image data and put them in squares in the top left
            data = d;
            // Load additional images
            if (!(typeof additional_image_data[d.id] === 'undefined')) {
                loadAdditionalImages(d);
            }
            // Display related text
            // The text is animated in
            foreign_group = svg.append("g").attr({
                "opacity": 0
            })
            foreign_group.classed("foreignObject", true)
            foreign_object = foreign_group.append("foreignObject").attr({
                "width": 435,
                "height": 390,
                "x": text_x,
                "y": text_y,
                "requiredFeatures": "http://www.w3.org/TR/SVG11/feature#Extensibility"
            })
            source_object = foreign_group.append("foreignObject").attr({
                "width": 848,
                "height": 50,
                "x": source_x,
                "y": source_y,
                "requiredFeatures": "http://www.w3.org/TR/SVG11/feature#Extensibility"
            })
            source_object.append("xhtml:body").html(get_source(data))
            foreign_object.append("xhtml:body").html(get_text(data))
            foreign_group.transition().duration(text_fade_in_time).attr({
                    "opacity": 1
                })
                // Fade in a close button in the main pop ups
            close_button_group = svg.append("g").attr({
                "opacity": 0,
                "transform": "translate(835, 34)"
            }).on('click', reset)
            close_button_group.classed("closeButton", true)
            close_button_group.classed("mousefinger", true)
            close_buton = close_button_group.append("image").attr({
                "xlink:href": 'images/close-button.png',
                "width": 100,
                "height": 100
            });
            close_button_group.transition().duration(text_fade_in_time).attr({
                "opacity": 1
            })
        })
        //Make the image more visible in the circle
        //by decreasing the image size at the same time and adjusting the clip
    d3.select(this).select('image').attr({
        "clip-path": "url(#full_clip)"
    }).transition().duration(transition_time).attr({
        "width": image_max_hw,
        "height": image_max_hw,
        "transform": "translate(-" + image_max_hw / 2 + ", -" + image_max_hw / 2 + ")"
    })
    full_clip.transition().duration(transition_time).attr({
            "cx": clip_maximized_xy,
            "cy": clip_maximized_xy
        })
        // Move related circles to the foreground in the corner of the backdrop
    d.related.forEach(function(d, i) {
        d3.select(".datapoint" + d).each(function() {
            bringToFront(this);
        }).on("click", enlarge_from_related).transition().duration(transition_time).attr("transform", "translate(" + (related_starting_x - (related_x_offset * i)) + ", " + related_starting_y + ")");
    });
    // connect the squares with lines
}

function loadAdditionalImages(d) {
    // Create the g nodes and add the circles to them
    additional_images = additional_image_data[d.id];
    additional_image_positions = additional_image_data[d.id].positions;
    // Add connecting lines
    additional_image_positions.forEach(function(location) {
        add_line = svg.append('line').attr({
            "x1": location.x + (z / 2),
            "y1": location.y + (z / 2),
            "x2": 265,
            "y2": 302,
            "stroke-width": 5,
            "stroke": "black"
        });
        d3.selectAll('.enlarged').each(function() {
            bringToFront(this);
        })
        add_line.transition().duration(text_fade_in_time).attr({
            'stroke-width': 10
        });
    });
    // Add images over the lines
    additional_images.images.forEach(function(image_name, index) {
        related_image = svg.append('g').attr({
            "transform": "translate(" + additional_image_positions[index].x + ", " + additional_image_positions[index].y + ")",
            "opacity": 0
        }).on('click', swap)
        related_image.classed({
            'additional_image1': true,
            "video": additional_images.media == "video",
            'mousefinger': true,
            "rect": true,
            "add_img": true
        })
        .attr("data-mediatitle", additional_images.mediatitle);

        related_image.append("rect").attr({
            "fill": "white",
            "width": z,
            "height": z
        }).style("stroke-width", .5).style("stroke", "black");
        related_image.append("image").attr({
            "xlink:href": 'images/' + image_name,
            "width": z - .5,
            "height": z - .5,
            "transform": "translate(.25,.25)"
        });
        related_image.transition().duration(text_fade_in_time).attr({
            "opacity": 1
        })
    });
    svg.transition().duration(text_fade_in_time + 50).each("end", function() {
        d3.select('.add_img').each(swap)
    })
}

function get_video(title) {
    return '<video width="327" height="326" controls><source src="videos/' + title + '.mp4" type="video/mp4"><source src="videos/' + title + '.ogg" type="video/ogg">Your browser does not support the video tag.</video>';
}

function swap() {

    // since the circle coordinates start in the middle and rect starts in the top left,
    // we have to account for this with an offset
    shape_offset = z / 2;
    // move enlarged group to additional_image spot
    enlarged_one = d3.select('.enlarged');
    small_one = d3.select(this);
    enlarged_position = enlarged_one.attr("transform");
    small_position = small_one.attr("transform");
    enlarged_x = d3.transform(enlarged_position).translate[0];
    enlarged_y = d3.transform(enlarged_position).translate[1];
    enlarged_scale = d3.transform(enlarged_position).scale[0];
    small_x = d3.transform(small_position).translate[0];
    small_y = d3.transform(small_position).translate[1];
    small_scale = d3.transform(small_position).scale[0];
    if (enlarged_one.classed("circle") && small_one.classed('rect')) {
        enlarged_one.transition().duration(750).attr("transform", "translate(" + (small_x + shape_offset) + ", " + (small_y + shape_offset) + ")scale(" + small_scale + ")");
        small_one.transition().duration(750).attr("transform", "translate(" + (enlarged_x - (shape_offset * enlarged_scale)) + ", " + (enlarged_y - (shape_offset * enlarged_scale)) + ")scale(" + enlarged_scale + ")")
        .each("end", function() {
                if (small_one.classed("video")) {

                    svg.append("foreignObject").attr({
                            "width": (327) ,
                            "height": (326),
                            "x": 92,
                            "y": 174,
                            }).classed('embedded_video', true).append("xhtml:body")
                                .html(get_video(small_one.attr("data-mediatitle")));
                }
            });
    } else if (enlarged_one.classed("rect") && small_one.classed('circle')) {
        if (enlarged_one.classed("video")) {
            // Remove the video containers
            d3.select('.embedded_video').remove();
        }
        enlarged_one.transition().duration(750).attr("transform", "translate(" + (small_x - shape_offset) + ", " + (small_y - shape_offset) + ")scale(" + small_scale + ")");
        small_one.transition().duration(750).attr("transform", "translate(" + (enlarged_x + (shape_offset * enlarged_scale)) + ", " + (enlarged_y + (shape_offset * enlarged_scale)) + ")scale(" + enlarged_scale + ")");
    } else {
        if (enlarged_one.classed("video")) {
            // Remove the video containers
            d3.select('.embedded_video').remove();
        }
        enlarged_one.transition().duration(750).attr("transform", "translate(" + (small_x) + ", " + (small_y) + ")scale(" + small_scale + ")");
        small_one.transition().duration(750).attr("transform", "translate(" + (enlarged_x) + ", " + (enlarged_y) + ")scale(" + enlarged_scale + ")");
    }
    enlarged_one.on('click', swap);
    enlarged_one.classed("mousefinger", true);
    enlarged_one.classed("enlarged", false);
    small_one.classed("enlarged", true)
    small_one.classed("mousefinger", false)
}

function get_text(d) {
    html = '<hr>';
    d.text.forEach(function(text_row) {
        html += '<div style="font-size:18px;">' + text_row + '</div><br>'
    });
    return html;
}

function get_source(d) {
    html = '<hr>';
    html += '<div style="font-size: .8em;">' + d.source + '</div>'
    return html;
}
// This function handles clicking on a related circle from the enlarged view.
// Initially, this an "enlarge()" were the same function, but there are some special cases
// that need to be handled, so for now, this is a separate function. Unfortunately, there
// is a lot of code duplication at this point.
function enlarge_from_related(d) {
    // Retract all of the nodes
    circle_groups.each(retract);
    // Bring all of the items to the foreground.
    d3.select('.dimmer').each(function() {
        bringToFront(this);
    })
    d3.select('.background').each(function() {
        bringToFront(this);
    })
    d3.selectAll('g.foreignObject').each(function() {
        bringToFront(this);
    })
    d3.selectAll('line').each(function() {
        bringToFront(this);
    })
    d3.selectAll('.add_img').each(function() {
        bringToFront(this);
    })
    d3.selectAll('.closeButton').each(function() {
        bringToFront(this);
    })
    d3.selectAll('line').transition().duration(transition_time / 2).attr({
        "stroke-width": 0
    }).each("end", function() {
        d3.selectAll('line').remove()
    });
    d3.selectAll('g.foreignObject').transition().duration(transition_time / 2).attr({
        "opacity": 0,
    }).each("end", function() {
        d3.selectAll('g.foreignObject').remove()
    });
    d3.selectAll('.add_img').transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        d3.selectAll('.add_img').remove()
    });
    // Move the related circle to the enlarged spot.
    d3.select(this).each(function() {
            bringToFront(this);
        }).classed("enlarged", true).classed('mousefinger', false).on("click", "").transition().duration(transition_time).attr("transform", get_enlarged_transformation).select('circle').attr("stroke-width", 1).each("end", function(d) {
            data = d;
            // Load additional images
            if (!(typeof additional_image_data[d.id] === 'undefined')) {
                loadAdditionalImages(d);
            }
            // Display related text
            // The text is animated in
            foreign_group = svg.append("g").attr({
                "opacity": 0,
                "class": "foreignObject"
            })
            foreign_object = foreign_group.append("foreignObject").attr({
                "width": 435,
                "height": 390,
                "x": text_x,
                "y": text_y,
                "requiredFeatures": "http://www.w3.org/TR/SVG11/feature#Extensibility"
            })
            source_object = foreign_group.append("foreignObject").attr({
                "width": 848,
                "height": 50,
                "x": source_x,
                "y": source_y,
                "requiredFeatures": "http://www.w3.org/TR/SVG11/feature#Extensibility"
            })
            source_object.append("xhtml:body").html(get_source(data))
            foreign_object.append("xhtml:body").html(get_text(data))
            foreign_group.transition().duration(text_fade_in_time).attr({
                "opacity": 1
            })
        })
        //Make the image more visible in the circle
    d3.select(this).select('image').attr({
            "clip-path": "url(#related_clip)"
        }).transition().duration(transition_time).attr({
            "width": image_max_hw,
            "height": image_max_hw,
            "transform": "translate(-" + image_max_hw / 2 + ", -" + image_max_hw / 2 + ")"
        }).each("end", function() {
            full_clip.attr({
                "cx": clip_maximized_xy,
                "cy": clip_maximized_xy
            });
            d3.select('.enlarged').select("image").attr({
                "clip-path": "url(#full_clip)"
            });
        })
        // Adjust the clips. This is a special case because we already have two differnet clips.
        // A third one is needed to handle the related clip moving in.
    related_clip.transition().duration(transition_time).attr({
        "cx": clip_maximized_xy,
        "cy": clip_maximized_xy
    }).each("end", function() {
        related_clip.attr({
            "cx": clip_minimized_xy,
            "cy": clip_minimized_xy
        })
    });
    // Move related circles to the foreground in the corner of the backdrop
    d.related.forEach(function(d, i) {
        d3.select(".datapoint" + d).each(function() {
            bringToFront(this);
        }).on("click", enlarge_from_related).transition().duration(transition_time).attr("transform", "translate(" + (related_starting_x - (related_x_offset * i)) + ", " + related_starting_y + ")");
    });
}
// Close the view
function reset() {
    // Remove the text and then delete it
    d3.selectAll('g.foreignObject').transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        d3.selectAll('g.foreignObject').remove()
    });
    d3.selectAll('.add_img').transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        d3.selectAll('.add_img').remove()
    });
    d3.selectAll('.closeButton').transition().duration(transition_time / 2).attr({
        "opacity": 0
    }).each("end", function() {
        d3.selectAll('.closeButton').remove()
    });
    d3.selectAll('line').transition().duration(transition_time / 2).attr({
        "stroke-width": 0
    }).each("end", function() {
        d3.selectAll('line').remove()
    });
    // Make the background fade into the circles location
    d3.select('.background').transition().duration(transition_time).attr("width", 0).attr("height", 0);
    // Transition the dimmer away
    d3.select('.dimmer').transition().duration(transition_time).attr("fill-opacity", 0.0).each('end', function() {
        d3.select('.dimmer').attr("height", 0).attr("width", 0);
    });
    circle_groups.each(retract);
}
// This will move a point back to its origin
function retract(d) {

    // Remove any video
    d3.select('.embedded_video').remove();

    // Return the clip to the original circle clip
    // and return the size of the image to the scaled version
    d3.select(this).select('image').transition().duration(transition_time).attr({
        "width": image_min_hw,
        "height": image_min_hw,
        "transform": "translate(-" + image_min_hw / 2 + ", -" + image_min_hw / 2 + ")"
    }).each("end", function() {
        d3.select(this).attr({
            "clip-path": "url(#clip)"
        })
    });
    full_clip.transition().duration(transition_time).attr({
        "cx": clip_minimized_xy,
        "cy": clip_minimized_xy
    })
    d3.select(this).classed("enlarged", false).classed('mousefinger', true).on('click', enlarge).transition().duration(transition_time).attr("transform", translate).select('circle').attr("stroke-width", 3);
}
// There is no Z-Index in D3, so this must be done to draw items on top of each other.
function bringToFront(object) {
    object.parentNode.appendChild(object);
}