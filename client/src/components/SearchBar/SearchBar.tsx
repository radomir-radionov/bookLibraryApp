import dataTestId from 'constants/dataTestId';

import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'redux/user';
import { enteredBookName } from 'redux/user/selectors';

import { ActionCloseIcon, ActionSearchingCIcon, ActionSearchingIcon, Btn, Form, Label, SearchInput } from './styles';

type TProps = {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ isSearchBarOpen, setIsSearchBarOpen }: TProps) => {
  const dispatch = useDispatch();
  const searchValue = useSelector(enteredBookName);
  const [isFocused, setIsFocused] = useState(false);

  const handleOpeningSearchBar = () => setIsSearchBarOpen(!isSearchBarOpen);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(userActions.setBookName(e.target.value));
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Form $visible={isSearchBarOpen}>
      <Label htmlFor='searching'>
        {isFocused ? <ActionSearchingCIcon width='16' height='16' /> : <ActionSearchingIcon width='16' height='16' />}
      </Label>
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
          <ActionCloseIcon width='16' height='16' />
        </Btn>
      )}
    </Form>
  );
};

export default SearchBar;
