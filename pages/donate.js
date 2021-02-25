import Head from 'components/head';
// import Container from 'components/Container/Container';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import styles from '../styles/donate.module.css';

const pageTitle = 'Donate';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="white"
        columns={[
          <div className={styles.donateContent}>
            <img
              src={`${s3}guidestar_gold.png`}
              alt="GuideStar Gold Transparency Seal"
              className={styles.goldSealImg}
            />
            <p>
              PLACE HOLDER FOR DONATE PAGE COPY. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
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
          </div>,
        ]}
      />

      {/* <Container theme="white">
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
      </Container> */}
    </>
  );
}

export default DonatePage;
