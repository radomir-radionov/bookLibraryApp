import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSortByRating } from 'redux/books/selectors';
import { booksActions } from 'redux/books/slice';
import { displayingContentActions } from 'redux/displayingContent';
import { displayingBooks, isSearchBarOpen } from 'redux/displayingContent/selectors';
import { ButtonAction, SearchBar } from 'components';
import { BTN_FILTER_VARIANTS } from 'components/ButtonAction/types';

import {
  ActionRatingDownIcon,
  ActionRatingUpIcon,
  Actions,
  ActionSearchingIcon,
  ListIcon,
  Name,
  NavListStyled,
  TilesIcon,
} from './styles';

const NavList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isSearchBarOpen);
  const displayingData = useSelector(displayingBooks);
  const isSortByRating = useSelector(selectIsSortByRating);

  const handleBooksViewDispaling = (type: string) => () => dispatch(displayingContentActions.setDisplayingBooks(type));
  const handleSearchBarOpening = () => dispatch(displayingContentActions.setSearchBarOpen());
  const handleSortingByRating = () => dispatch(booksActions.sortBooksByRating());

  return (
    <NavListStyled>
      {isOpen ? (
        <Actions>
          <SearchBar />
        </Actions>
      ) : (
        <>
          <Actions>
            <SearchBar />
            <ButtonAction
              value='searching'
              onClick={handleSearchBarOpening}
              visible={isOpen}
              dataTestId={dataTestId.BUTTON_SEARCH_OPEN}
            >
              <ActionSearchingIcon />
            </ButtonAction>
            <ButtonAction value='rating' onClick={handleSortingByRating} variant={BTN_FILTER_VARIANTS.OVAL}>
              {isSortByRating ? <ActionRatingUpIcon /> : <ActionRatingDownIcon />}
              <Name data-test-id={dataTestId.BUTTON_SORT_RATING}>По рейтингу</Name>
            </ButtonAction>
          </Actions>
          <Actions>
            <ButtonAction
              value='tiles'
              onClick={handleBooksViewDispaling('tiles')}
              mix={displayingData}
              dataTestId={dataTestId.BUTTON_MENU_VIEW_WINDOW}
            >
              <TilesIcon />
            </ButtonAction>
            <ButtonAction
              value='list'
              onClick={handleBooksViewDispaling('list')}
              mix={displayingData}
              dataTestId={dataTestId.BUTTON_MENU_VIEW_LIST}
            >
              <ListIcon />
            </ButtonAction>
          </Actions>
        </>
      )}
    </NavListStyled>
  );
};

export default NavList;
