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

import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JSlider;
import javax.swing.JToolBar;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import abc.midi.PlayerStateChangeEvent;
import abc.midi.TempoChangeEvent;
import abc.midi.TunePlayer;
import abc.midi.TunePlayerListenerInterface;
import abc.notation.NoteAbstract;
import abc.notation.Tune;

/** A simple user interface to display abc files content and play
 * tunes. */
public class PlayerToolBar extends JToolBar implements TunePlayerListenerInterface
{
  private static final long serialVersionUID = -3637390767150235071L;
  private JLabel m_tempoField = new JLabel("180");
  private JSlider m_tempoSlider = new JSlider(0, 300, 180);
  private TunePlayer m_player = null;
  private JButton m_playButton = null;
  private Tune m_tune = null;

  public PlayerToolBar(TunePlayer player)
  {
    super("Tune Player");
    m_player = player;
    setLayout(new BorderLayout());
    m_playButton = new JButton("PLAY | STOP");
    add(m_playButton, BorderLayout.EAST);
    add(m_tempoSlider, BorderLayout.CENTER);
    add(m_tempoField, BorderLayout.WEST);

    ChangeListener tempoListener = new ChangeListener()
    {
      public void stateChanged(ChangeEvent e)
      {
        m_player.setTempo(m_tempoSlider.getValue());
        m_tempoField.setText((new Integer(m_tempoSlider.getValue())).toString());
      }
    };
    m_tempoSlider.addChangeListener(tempoListener);

    player.addListener(this);
  }

  public void tempoChanged(TempoChangeEvent e)
  { m_tempoSlider.setValue(e.getNewTempoValue()); }

  public void playBegin(PlayerStateChangeEvent e)
  { }

  public void notePlayed(NoteAbstract e)
  { }

  public void playEnd(PlayerStateChangeEvent e)
  { }

  public void partPlayed(int begin, int end)
  {}

  public void setTune(Tune tune)
  { m_tune = tune; }

  public JButton getPlayButton()
  { return m_playButton; }

/*  public JSlider getSlider()
  { return m_tempoSlider; }

  public JLabel getTempoField()
  { return m_tempoField; }*/

}
