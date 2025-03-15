import { AnimateSharedLayout } from 'framer-motion';
import { StyledIcon } from '@styled-icons/styled-icon';
import { Dispatch, SetStateAction } from 'react';

import * as S from './styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Tab = {
  icon?: StyledIcon;
  label: string;
  view: string;
};

type TabsProps<T extends string> = {
  id?: string;
  tabs: Tab[];
  currentTab: T;
  setCurrentTab: Dispatch<SetStateAction<T>>;
};

const Tabs = <T extends string>({
  id = 'tab',
  tabs,
  currentTab,
  setCurrentTab,
}: TabsProps<T>) => {
  const router = useRouter();
  const hasMatchWithSomeTab = (view: string) =>
    tabs.some(tab => tab.view === view);

  useEffect(() => {
    const { [id]: view } = router.query;

    if (hasMatchWithSomeTab(view as string)) setCurrentTab(view as T);
  }, [router]);

  return (
    <S.Container>
      <AnimateSharedLayout>
        <S.Tabs>
          {tabs.map(({ label, icon: Icon, view }) => {
            const active = view === currentTab;

            return (
              <S.Tab
                key={view}
                isActive={view === currentTab}
                onClick={() => setCurrentTab(view as T)}
              >
                <S.Wrapper>
                  {Icon && <Icon size={20} />}

                  <S.Label>{label}</S.Label>
                </S.Wrapper>

                {active ? <S.Underline layoutId="underline" /> : null}
              </S.Tab>
            );
          })}
        </S.Tabs>
      </AnimateSharedLayout>
    </S.Container>
  );
};

export { Tabs };
