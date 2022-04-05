import {
    Row,
    Col,
    Layout,
    Card,
    Typography,
    Image,
    Skeleton,
    Space,
} from "antd";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { getPeopleList } from "../../api/api";
import { PeoplePictureSize } from "../../constants/common";
import * as S from "../../styles/manage/people.style";
import { PeopleData } from "../../types/types";

interface PeopleProps {}

const People: NextPage<PeopleProps> = () => {
    let [data, setData] = useState<PeopleData[]>([]);
    let skeletonCards = useMemo(() => {
        let arr = new Array(20);
        arr.fill({ age: undefined, name: "", picture: "" });
        return arr;
    }, []);

    useEffect(() => {
        _getPeopleList();
    }, []);

    async function _getPeopleList() {
        try {
            let result = await getPeopleList();
            setData(result.people);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Row>
                <S.Title>PEOPLE</S.Title>
            </Row>
            <hr />

            <Layout.Content>
                <S.CardContainer>
                    {data && data.length > 0
                        ? data.map((item, idx) => (
                              <Card
                                  hoverable
                                  style={{ ...S.CardStyle }}
                                  key={idx}
                                  cover={
                                      <Image
                                          preview={false}
                                          width={PeoplePictureSize.width}
                                          height={PeoplePictureSize.height}
                                          alt={item.name}
                                          src={`${item.picture}`}
                                          placeholder={
                                              <Space align="center">
                                                  <Skeleton.Avatar
                                                      active
                                                      size="large"
                                                      shape="square"
                                                      style={{
                                                          width: PeoplePictureSize.width,
                                                          height: PeoplePictureSize.height,
                                                      }}
                                                  />
                                              </Space>
                                          }
                                      />
                                  }
                                  onClick={() => console.log("상세페이지")}
                              >
                                  <Typography.Title level={3}>
                                      {item.name}
                                  </Typography.Title>
                                  <Typography.Text mark>
                                      Age: {item.age}
                                  </Typography.Text>
                              </Card>
                          ))
                        : // skeleton
                          skeletonCards.map((item, idx) => (
                              <Card style={{ ...S.CardStyle }} key={idx}>
                                  <Skeleton
                                      active
                                      avatar={{
                                          size: "large",
                                          style: {
                                              width:
                                                  PeoplePictureSize.width * 0.8,
                                              height:
                                                  PeoplePictureSize.width * 0.8,
                                          },
                                          shape: "square",
                                      }}
                                      loading
                                      title={{ width: 0 }}
                                      paragraph={{ width: 0 }}
                                  />
                              </Card>
                          ))}
                </S.CardContainer>
            </Layout.Content>
        </>
    );
};

export default People;
