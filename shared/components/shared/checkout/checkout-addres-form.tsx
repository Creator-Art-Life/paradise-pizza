'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { WhiteBlock, ErrorText, FormTextarea } from "@/shared/components/shared";
import AddressInput from '../address-input';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput
                value={field.value}
                onChange={field.onChange}
              />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Comment to order"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
