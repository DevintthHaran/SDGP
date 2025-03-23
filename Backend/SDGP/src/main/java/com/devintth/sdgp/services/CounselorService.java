package com.devintth.sdgp.services;

import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.repository.CounselorProjection;
import com.devintth.sdgp.repository.CounselorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

@Service
public class CounselorService {

    @Autowired
    private CounselorRepository counselorRepository;

    public List<CounselorProjection> getApprovedCounselorsByPosition(String position) {
        return counselorRepository.findByPositionAndStatus(position, "Approved");
    }
}