import dataTestId from 'constants/dataTestId';

import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { isSearchBarOpen } from 'redux/displayingContent/selectors';
import { userActions } from 'redux/user';
import { enteredBookName } from 'redux/user/selectors';

import { ActionCloseIcon, ActionSearchingCIcon, ActionSearchingIcon, Btn, Form, Label, SearchInput } from './styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(enteredBookName);
  const isOpen = useSelector(isSearchBarOpen);
  const [isFocused, setIsFocused] = useState(false);

  const handleOpeningSearchBar = () => dispatch(displayingContentActions.setSearchBarOpen());
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(userActions.setBookName(e.target.value));
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Form $visible={isOpen}>
      <Label htmlFor='searching'>{isFocused ? <ActionSearchingCIcon /> : <ActionSearchingIcon />}</Label>
      <SearchInput
        type='search'
        id='searching'
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Поиск книги или автора…'
        data-test-id={dataTestId.INPUT_SEARCH}
      />
      {window.innerWidth <= 684 && (
        <Btn
          type='button'
          onClick={handleOpeningSearchBar}
          $variant='mobile'
          data-test-id={dataTestId.BUTTON_SEARCH_CLOSE}
        >
          <ActionCloseIcon />
        </Btn>
      )}
    </Form>
  );
};

export default SearchBar;
