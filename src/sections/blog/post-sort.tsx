import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useTranslate } from 'src/locales';

import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  onSort: (newValue: string) => void;
  sortOptions: {
    value: string;
    label: string;
  }[];
};

/**
 * Component for sorting blog posts.
 *
 * @param {Object} props - The component props.
 * @param {string} props.sort - The current sort option.
 * @param {string[]} props.sortOptions - The available sort options.
 * @param {Function} props.onSort - The callback function for handling sort changes.
 * @returns {JSX.Element} The rendered component.
 */
export default function PostSort({ sort, sortOptions, onSort }: Props): JSX.Element {
  const { t } = useTranslate();

  const popover = usePopover();

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={popover.onOpen}
        endIcon={
          <Iconify
            icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
          />
        }
        sx={{ fontWeight: 'fontWeightSemiBold' }}
      >
        {t('sortBy.title')}
        <Box component="span" sx={{ ml: 0.5, fontWeight: 'fontWeightBold' }}>
          {t(`sortBy.${sort}`)}
        </Box>
      </Button>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={sort === option.value}
            onClick={() => {
              popover.onClose();
              onSort(option.value);
            }}
          >
            {t(`sortBy.${option.value}`)}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
