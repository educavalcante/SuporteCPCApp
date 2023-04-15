import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant?: "solid" | "outline";
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            bg="gray.700"
            borderWidth={variant === "outline" ? 1 : 0}
            borderColor="gray.700"
            mb={2}
            mt={variant === "outline" ? 20 : 0}
            borderRadius={50}
            rounded="sm"   // para ficar totalmente arrendodado usar o "full"
            _pressed={  // estilizar quando tiver pressionado
                {
                    bg: "gray.300"
                }
            }

            {...rest}
        >
            <Text
                color={variant === "outline" ? "green.600" : "white"}
                fontSize="xs"
                fontFamily="heading"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}