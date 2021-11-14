export var not_price_template =
    `<?xml version="1.0" encoding="utf-8"?>
    <DieCutLabel Version="8.0" Units="twips" MediaType="Default">
        <PaperOrientation>Portrait</PaperOrientation>
        <Id>Small30334</Id>
        <IsOutlined>false</IsOutlined>
        <PaperName>30334 2-1/4 in x 1-1/4 in</PaperName>
        <DrawCommands>
            <RoundRectangle X="0" Y="0" Width="3240" Height="1800" Rx="270" Ry="270" />
        </DrawCommands>
        <ObjectInfo>
            <TextObject>
                <Name>TEXT</Name>
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
                <LinkedObjectName />
                <Rotation>Rotation0</Rotation>
                <IsMirrored>False</IsMirrored>
                <IsVariable>False</IsVariable>
                <GroupID>-1</GroupID>
                <IsOutlined>False</IsOutlined>
                <HorizontalAlignment>Center</HorizontalAlignment>
                <VerticalAlignment>Top</VerticalAlignment>
                <TextFitMode>ShrinkToFit</TextFitMode>
                <UseFullFontHeight>True</UseFullFontHeight>
                <Verticalized>False</Verticalized>
                <StyledText>
                    <Element>
                        <String xml:space="preserve"> {{product_name}}</String>
                        <Attributes>
                            <Font Family="Tahoma" Size="16" Bold="False" Italic="False" Underline="False" Strikeout="False" />
                            <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
                        </Attributes>
                    </Element>
                </StyledText>
            </TextObject>
            <Bounds X="58" Y="86" Width="2780" Height="345" />
        </ObjectInfo>
        <ObjectInfo>
            <TextObject>
                <Name>TEXT_1</Name>
                <ForeColor Alpha="255" Red="255" Green="255" Blue="255" />
                <BackColor Alpha="255" Red="0" Green="0" Blue="0" />
                <LinkedObjectName />
                <Rotation>Rotation270</Rotation>
                <IsMirrored>False</IsMirrored>
                <IsVariable>False</IsVariable>
                <GroupID>-1</GroupID>
                <IsOutlined>False</IsOutlined>
                <HorizontalAlignment>Center</HorizontalAlignment>
                <VerticalAlignment>Top</VerticalAlignment>
                <TextFitMode>ShrinkToFit</TextFitMode>
                <UseFullFontHeight>True</UseFullFontHeight>
                <Verticalized>False</Verticalized>
                <StyledText>
                    <Element>
                        <String xml:space="preserve">M.S. Global</String>
                        <Attributes>
                            <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />
                            <ForeColor Alpha="255" Red="255" Green="255" Blue="255" HueScale="100" />
                        </Attributes>
                    </Element>
                </StyledText>
            </TextObject>
            <Bounds X="2898" Y="86" Width="285" Height="1627" />
        </ObjectInfo>
        <ObjectInfo>
            <BarcodeObject>
                <Name>BARCODE</Name>
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
                <LinkedObjectName />
                <Rotation>Rotation0</Rotation>
                <IsMirrored>False</IsMirrored>
                <IsVariable>True</IsVariable>
                <GroupID>-1</GroupID>
                <IsOutlined>False</IsOutlined>
                <Text>{{product_barcode}}</Text>
                <Type>UpcA</Type>
                <Size>Medium</Size>
                <TextPosition>Bottom</TextPosition>
                <TextFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />
                <CheckSumFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />
                <TextEmbedding>Full</TextEmbedding>
                <ECLevel>0</ECLevel>
                <HorizontalAlignment>Center</HorizontalAlignment>
                <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />
            </BarcodeObject>
            <Bounds X="58" Y="405" Width="2760" Height="1293" />
        </ObjectInfo>
    </DieCutLabel>`