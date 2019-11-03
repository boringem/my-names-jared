// modified by HHR 07-Aug-13

// Copyright 2006-2008 Lionel Gueganton
// This file is part of abc4j.
//
// abc4j is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// abc4j is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with abc4j.  If not, see <http://www.gnu.org/licenses/>.
package abcynth;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.swing.JApplet;
import javax.swing.JButton;

import abc.examples.Main;
import abc.parser.AbcTuneBook;
import abc.parser.TuneBookParser;

/** A simple user interface to display abc files content and play
 * tunes. */
public class PlayerApplet extends JApplet
{
  private static final long serialVersionUID = 2227304461525394613L;
  private PlayerApp m_app = null;
  //private TunePlayer m_player = null;

  public PlayerApplet()
  {
    m_app = new PlayerApp();
    JButton launchDemoButton = new JButton("Click here to run demo!");
    launchDemoButton.addActionListener(new ActionListener(){
      public void actionPerformed(ActionEvent e)
      {
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        m_app.setLocation((screenSize.width  - m_app.getWidth())  / 2,
                          (screenSize.height - m_app.getHeight()) / 2);
        m_app.setSize(700,550);
        m_app.setVisible(true);
      }
    }
    );
    try
    {
      InputStream is = Main.class.getResourceAsStream(Main.DEMO_RESOURCE_NAME);
      System.out.println("get ressource " + is);
      if (is!=null)
      {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
        AbcTuneBook atb = new TuneBookParser().parse(reader);
        m_app.getTuneBookEditor().setTuneBook(atb);
      }
    }
    catch (Exception e)
    { }
    getContentPane().add(launchDemoButton);
  }

  public void destroy()
  {m_app.getPlayer().stop(); }
}
