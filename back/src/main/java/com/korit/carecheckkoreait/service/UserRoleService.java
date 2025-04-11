package com.korit.carecheckkoreait.service;

import java.util.List;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.korit.carecheckkoreait.entity.UserRole;
import com.korit.carecheckkoreait.repository.UserRoleRepository;

@Service
public class UserRoleService {
    @Autowired
    private UserRoleRepository userRoleRepository;

    @Transactional(readOnly = true)
    public List<UserRole> selectUserCodyByRoleId(int roleId) throws Exception {
        return userRoleRepository.selectUserCodyByRoleId(roleId)
        .orElseThrow(()-> new NotFoundException("조회된 정보가 없습니다."));
    }
}
