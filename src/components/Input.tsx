import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bg="gray.100"
            h={14}
            px={4}
            borderWidth={3}
            borderRadius={10}
            fontSize="xs"
            color="white"
            fontFamily="body"
            mb={2}
            placeholderTextColor="gray.300"
            _focus={{
                bg: "gray.700",
                borderWidth: 1,
                borderColor: "grenn.500"
            }}

            {...rest}
        />
    );
}