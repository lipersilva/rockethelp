import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string;
}

export function Button({title, ...rest}: Props) {
  return(
    <ButtonNativeBase 
      bg="green.700" 
      h={14} 
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }} // _pressed is a custom prop that we define in the theme
      {...rest}
    >
      <Heading color="white" fontSize="sm"> 
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}