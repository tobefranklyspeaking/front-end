import Head from 'components/head';
import Container from 'components/Container/Container';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import styles from '../styles/donate.module.css';

const pageTitle = 'Donate';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Container theme="white">
        <div>
          <img
            src="https://user-images.githubusercontent.com/51661129/108640355-749a0000-7499-11eb-89af-4fdb6efaff97.gif"
            alt="GuideStar Gold Transparency Seal"
            className={styles.sealImg}
          />
        </div>
        <iframe
          title="Donation Form"
          src="https://secure.lglforms.com/form_engine/s/BRtP7QUKyHOyEYsZROsRew"
          height="1500px"
          width="110%"
          style={{
            border: '1px solid transparent',
            outline: '1px solid transparent',
          }}
        />
      </Container>
    </>
  );
}

export default DonatePage;
