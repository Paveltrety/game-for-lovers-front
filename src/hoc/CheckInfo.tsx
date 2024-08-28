import { useAppSelector } from '@/hooks/redux';
import { gameInfoSelectors } from '@/store/api/gameInfo';
import { useEffect, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckInfo = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const male = useAppSelector(gameInfoSelectors.male);
  const female = useAppSelector(gameInfoSelectors.female);

  const isHasInfo = !male || !female;

  useEffect(() => {
    if (isHasInfo) {
      navigate('/');
    }
  }, [isHasInfo]);

  if (isHasInfo) {
    return <div>Загрузка</div>;
  }

  return <>{children}</>;
};

export default CheckInfo;
