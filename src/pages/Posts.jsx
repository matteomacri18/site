import React from 'react';
import Navbar from '../components/Navbar';
import ReactGA from 'react-ga';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';
import library from '../assets/thumbnail/library.png'

const TRAKING_ID = "G-X2SJDWTRTV";
ReactGA.initialize(TRAKING_ID);

const Posts = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container mx-auto px-10 py-20">
        <Grid>
          <Card
            title="Create and publish your own Android Library"
            description="Have you just created something special and do you want to share it with the community?"
            date="Nov.2022"
            link="https://medium.com/@matteomacri18/create-and-publish-your-own-android-library-w-jitpack-c96286c12a8f"
            image={library}
          />
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default Posts