import { Block, H1, MainButton, P } from "@karponents-ui/karpotic";

export default function Home() {
  return (
    <Block>
      <Block bgc="black-1">
        <Block.Center
          w={[, "100%", "768px"]}
          p={["64px", "16px", "32px", "16px"]}
        >
          <H1 color="white-2">KarpoJS</H1>
          <P typography="b sm" color="white-2">
            구독중 0
          </P>
          <P typography="b md" color="white-2" m={["24px", "0", "0", "0"]}>
            웹 개발자 Karpo입니다.
          </P>
          <Block m={["24px", "0", "0", "0"]}>
            <MainButton border="oval" colorSet="dark">
              구독하기
            </MainButton>
          </Block>
        </Block.Center>
      </Block>
      <Block.Center
        w={[, "100%", "768px"]}
        p={["64px", "16px", "32px", "16px"]}
      ></Block.Center>
    </Block>
  );
}
