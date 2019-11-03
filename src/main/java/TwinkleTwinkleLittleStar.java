package com.ociweb.jnb.abc4j;

import abc.notation.Tune;
import abc.parser.TuneBook;
import abc.ui.swing.JScoreComponent;


import javax.swing.JFrame;
import java.io.File;
import java.io.IOException;



import abc.midi.TunePlayer;
import abc.notation.Tune;
import abc.parser.TuneBook;
import abc.ui.swing.JScoreComponent;


import javax.swing.JFrame;
import java.io.File;
import java.io.IOException;



public class TwinkleTwinkleLittleStar {
    public static void main(String[] args) throws IOException {
        //loading from the file
        TuneBook book = new TuneBook(new File("twinkletwinkle.abc"));


        // creates a component that draws the melody on a musical staff
        JScoreComponent jscore = new JScoreComponent();
        jscore.setJustification(true);
        jscore.setTune(tune);
        JFrame j = new JFrame();
        j.add(jscore);
        j.pack();
        j.setVisible(true);
        // writes the score to a JPG file
        jscore.writeScoreTo(new File("twinklescore.jpg"));
    }
}
