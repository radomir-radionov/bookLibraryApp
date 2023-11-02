import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSortByRating } from 'redux/books/selectors';
import { booksActions } from 'redux/books/slice';
import { displayingContentActions } from 'redux/displayingContent';
import { displayingBooks } from 'redux/displayingContent/selectors';
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
import { useState } from 'react';

const Menu = () => {
  const dispatch = useDispatch();
  const displayingData = useSelector(displayingBooks);
  const isSortByRating = useSelector(selectIsSortByRating);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const onBtnViewClick = (type: string) => () => dispatch(displayingContentActions.setDisplayingBooks(type));
  const onSearchBarClick = () => setIsSearchBarOpen(!isSearchBarOpen);
  const onBtnRatingClick = () => dispatch(booksActions.sortBooksByRating());

  return (
    <MenuStyled>
      {isSearchBarOpen ? (
        <SearchBar isSearchBarOpen={isSearchBarOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
      ) : (
        <>
          <Actions>
            <SearchBar isSearchBarOpen={isSearchBarOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
            <ButtonFiltering
              onClick={onSearchBarClick}
              visible={isSearchBarOpen}
              dataTestId={dataTestId.BUTTON_SEARCH_OPEN}
            >
              <ActionSearchingIcon />
            </ButtonFiltering>
            <ButtonFiltering onClick={onBtnRatingClick} variant={BTN_FILTER_VARIANTS.OVAL}>
              {isSortByRating ? (
                <ActionRatingUpIcon width='16' height='16' />
              ) : (
                <ActionRatingDownIcon width='16' height='16' />
              )}
              <Name data-test-id={dataTestId.BUTTON_SORT_RATING}>По рейтингу</Name>
            </ButtonFiltering>
          </Actions>
          <Actions>
            <ButtonFiltering
              isActive={displayingData === 'tiles'}
              onClick={onBtnViewClick('tiles')}
              dataTestId={dataTestId.BUTTON_MENU_VIEW_WINDOW}
            >
              <TilesIcon width='20' height='20' />
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
