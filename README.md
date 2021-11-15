Website was created for an 'escape room' style puzzle chain for friends. It is not intended for public consumption.

Templates folder is legacy. If I ever decide to go back and fix HTML templating, they'll be useful again.

Eventually this ReadMe will contain a walkthrough. Need to actually create the puzzles first

1) index page has two hidden DIVs, Knowledge and Wisdom
2) Faith leads to a phone number (only visible on mobile devices)
3) Wisdom is a string of cryptic-sounding mumbo jumbo
    3a) the first words of each wisdom paragraph are numbers
    3b) the number is an extension on the phone system
4) Knowledge 1 has MGRS coords to an intersection
    4a) the lane the car is in goes to Scarborough
    4b) reference to Scarborough Faire
    4c) passwords are "parsley, sage, rosemary, thyme" in that order
5) phone sounds are related to a grid, on a 4x4 phone pad
    5a) first half of word is x coord, second half is y coord
    5b) solution is 12930D#
6) Requires javascript injection in text box
    6a) probably easiest way is to just read out the solution
    6b) 'verification' script is references in HTML comments
    6c) answer is "WEREWOLF T&A"
7) double encrypted string
    7a) first rot13, then a vigenere with the key "Knowledge"
    7b) references 3b
    
8) phone number leads to an apparently unrelated generic company number. All IVR items lead to infinate holds and empty mailboxes
9) input the number gained from Wisdom (12414). Leads to 

x) final video is on a USB embedded in a white sage smudge stick