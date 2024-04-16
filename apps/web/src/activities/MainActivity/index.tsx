import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import Header from '../../components/Header';
import WelcomeBox from './WelcomeBox';
import CalorieBox from './CalorieBox';

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <Header isCalendar />
      <ScreenContainer>
        <WelcomeBox />
        <CalorieBox />
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default MainActivity;
