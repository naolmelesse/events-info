import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import img1 from '../assets/2.jpeg'
import img2 from '../assets/3.jpeg'
import img3 from '../assets/4.jpeg'
import img4 from '../assets/5.jpeg'
import '../styles/scrollSection.scss'
const FadeUp = batch(Move(), StickyIn());

const ScrollSection = () => {
    return(
        <div className="scroll-container">
        <ScrollContainer>
        <ScrollPage page={0}>
          <Animator>
            
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator>
            
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator>
            
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <div className="image-grid">
                <img class="card_image" src={img1} alt="image" />
                <img class="card_image" src={img2} alt="image" />
                <img class="card_image" src={img3} alt="image" />
                <img class="card_image" src={img4} alt="image" />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

        </div>
           );
}

export default ScrollSection;