import { ChevronRight } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Modal } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

import { CenterContainer } from '../../components/Containers/ScreenContainer';
import SimpleMealBox from '../../components/MealBox/SimpleMealBox';
import koreanMeal, { mealData } from '../../constants/meal';
import { useFlow } from '../../layouts/stackflow';
import { useSetSelectedMeal, useselectedMeal } from '../../recoil/selectedMeal';
import { MealTime } from '../../types/Meal';

const MealSelectionModal: ActivityComponentType = () => {
  const selectedMeal = useselectedMeal();
  const setSelectedMeal = useSetSelectedMeal();

  const { pop } = useFlow();

  const handleSelectMeal = (selectedMeal: MealTime) => {
    setSelectedMeal(selectedMeal);
    pop();
  };

  return (
    <Modal>
      <CenterContainer width={'90%'} display={'flex'} p={2}>
        <Typography variant="h4" textAlign={'center'}>
          {selectedMeal ? `${koreanMeal[selectedMeal]}이 아닌가요?` : '무슨 식사를 하셨나요?'}
        </Typography>
        <Typography variant="caption" textAlign={'center'}>
          아래 항목에서 골라주세요!
        </Typography>
        <Box width={'100%'} mt={2}>
          {mealData.map(meal => {
            if (meal === selectedMeal) return null;
            return (
              <SimpleMealBox
                key={meal}
                mealCategory={meal}
                icon={<ChevronRight />}
                onClick={() => handleSelectMeal(meal)}
              />
            );
          })}
        </Box>
      </CenterContainer>
    </Modal>
  );
};

export default MealSelectionModal;
