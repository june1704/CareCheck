package com.korit.carecheckkoreait.dto.request;

import lombok.Data;

@Data
public class ReqSearchTodayReciptPatientsDto {
    private int page;
    private int limitCount;
    private String searchText;
}
