import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSortByRating } from 'redux/books/selectors';
import { booksActions } from 'redux/books/slice';
import { displayingContentActions } from 'redux/displayingContent';
import { displayingBooks, isSearchBarOpen } from 'redux/displayingContent/selectors';
import { ButtonFiltering, SearchBar } from 'components';
import { BTN_FILTER_VARIANTS } from 'components/ButtonFiltering/types';

import {
  ActionRatingDownIcon,
  ActionRatingUpIcon,
  Actions,
  ActionSearchingIcon,
  ListIcon,
  Name,
  MenuStyled,
  TilesIcon,
} from './styles';

const Menu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isSearchBarOpen);
  const displayingData = useSelector(displayingBooks);
  const isSortByRating = useSelector(selectIsSortByRating);
  const onBtnViewClick = (type: string) => () => dispatch(displayingContentActions.setDisplayingBooks(type));
  const onSearchBarClick = () => dispatch(displayingContentActions.setSearchBarOpen());
  const onBtnRatingClick = () => dispatch(booksActions.sortBooksByRating());

  return (
    <MenuStyled>
      {isOpen ? (
        <SearchBar />
      ) : (
        <>
          <Actions>
            <SearchBar />
            <ButtonFiltering onClick={onSearchBarClick} visible={isOpen} dataTestId={dataTestId.BUTTON_SEARCH_OPEN}>
              <ActionSearchingIcon />
            </ButtonFiltering>
            <ButtonFiltering onClick={onBtnRatingClick} variant={BTN_FILTER_VARIANTS.OVAL}>
              {isSortByRating ? <ActionRatingUpIcon /> : <ActionRatingDownIcon />}
              <Name data-test-id={dataTestId.BUTTON_SORT_RATING}>По рейтингу</Name>
            </ButtonFiltering>
          </Actions>
          <Actions>
            <ButtonFiltering
              isActive={displayingData === 'tiles'}
              onClick={onBtnViewClick('tiles')}
              dataTestId={dataTestId.BUTTON_MENU_VIEW_WINDOW}
            >
              <TilesIcon />
            </ButtonFiltering>
            <ButtonFiltering
              isActive={displayingData === 'list'}
              onClick={onBtnViewClick('list')}
              dataTestId={dataTestId.BUTTON_MENU_VIEW_LIST}
            >
              <ListIcon />
            </ButtonFiltering>
          </Actions>
        </>
      )}
    </MenuStyled>
  );
};

export default Menu;
