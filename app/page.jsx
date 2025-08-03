'use client'

import styles from './page.module.css'
import Navbar from '@/lib/components/Navbar';
import MainArticle from '@/lib/components/MainArticle';
import NewArticle from "@/lib/components/NewArticle";
import PopularArticles from "@/lib/components/PopularArticles";
import retroPic from '@/public/images/image-retro-pcs.jpg';
import laptopsPic from '@/public/images/image-top-laptops.jpg';
import gamingPic from '@/public/images/image-gaming-growth.jpg'
import NavbarMobile from "@/lib/components/NavbarMobile";

export default function Homepage() {
  return (
      <div className={styles.container}>
          <Navbar/>
          {/*<NavbarMobile />*/}
          <div className={styles.middlePage}>
              <MainArticle/>
              <div className={styles.newArticles}>
                  <p>New</p>
                  <NewArticle title={'Hydrogen VS Electric Cars'}
                              description={'Will hydrogen-fueled cars ever catch up to EVs?'}/>
                  <hr/>
                  <NewArticle title={'The Downsides of AI Artistry'}
                              description={'What are the possible adverse effects of on-demand AI image generation?'}/>
                  <hr/>
                  <NewArticle title={'Is VC Funding Drying Up?'}
                              description={'Private funding by VC firms is down 50% YOY. We take a look at what that means.'}/>
              </div>
          </div>

          <div className={styles.popularArticles}>
              <PopularArticles src={retroPic.src} alt={'retro Picture'} number={'01'} title={'Reviving Retro PCs'} description={'What happens when old PCs are given modern upgrades?'}/>
              <PopularArticles src={laptopsPic.src} alt={'retro Picture'} number={'02'} title={'Top 10 Laptops of 2022'} description={'Our best picks for various needs and budgets.'}/>
              <PopularArticles src={gamingPic.src} alt={'retro Picture'} number={'03'} title={'The Growth of Gaming'} description={'How the pandemic has sparked fresh opportunities.'}/>
          </div>
      </div>
  )
}